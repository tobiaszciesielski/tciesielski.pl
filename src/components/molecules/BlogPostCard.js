import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Button from '../atoms/Button';
import Card from './Card';

const imageStyles = {
  height: '210px',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
};

const Description = styled.div`
  padding: 0 18px;
  padding-top: 5px;
  position: relative;
`;

const StyledDate = styled.p`
  font-size: 12px;
  bottom: calc(100% + 3px);
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.codeComment};
`;

const Title = styled.h4`
  margin-bottom: 20px;
  position: relative;
  ::after {
    position: absolute;
    content: '';
    width: 70%;
    left: 0;
    bottom: -10px;
    height: 1px;
    background: linear-gradient(90deg, #fff 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.5;
  }
`;

const PostAbstract = styled.p`
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.05em;
`;

const CardButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -25px);
`;

const BlogPostCard = ({ data }) => {
  const {
    title,
    summary,
    heroImage: { gatsbyImageData },
    slug,
    publishedDate,
  } = data;

  const truncate = (text, length) =>
    text.length > length ? `${text.slice(0, length)}...` : text;

  const date = new Date();
  console.log(date);

  const truncatedSummary = truncate(summary, 180);

  return (
    <Card>
      <GatsbyImage
        image={getImage(gatsbyImageData)}
        imgStyle={imageStyles}
        style={imageStyles}
        alt={`${title} image`}
      />
      <Description>
        <StyledDate>{publishedDate}</StyledDate>
        <Title>{title}</Title>
        <PostAbstract title={summary}>{truncatedSummary}</PostAbstract>
      </Description>
      <Link to={`/blog/${slug}`}>
        <CardButton text="CZYTAJ" />
      </Link>
    </Card>
  );
};

BlogPostCard.propTypes = {
  data: propTypes.shape({
    title: propTypes.string,
    summary: propTypes.string,
    heroImage: propTypes.shape({ gatsbyImageData: propTypes.shape({}) }),
    slug: propTypes.string,
    publishedDate: propTypes.string,
  }).isRequired,
};

export default BlogPostCard;

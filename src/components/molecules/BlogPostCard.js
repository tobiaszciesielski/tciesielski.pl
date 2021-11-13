import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Button from '../atoms/Button';
import Card from './Card';
import typography from '../../styles/typography';

const imageStyles = {
  height: '180px',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
};

const Description = styled.div`
  padding: 0 18px;
  position: relative;
`;

const Tags = styled.div`
  position: relative;
  margin-bottom: 20px;
  ::after {
    position: absolute;
    content: '';
    width: 70%;
    left: 0;
    bottom: -12px;
    height: 1px;
    background: linear-gradient(90deg, #fff 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.5;
  }
`;

const Tag = styled.span`
  color: ${({ theme }) => theme.colors.darkest};
  font-size: 12px;
  margin-right: 6px;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.touch};
  padding: 2px 8px;
  border-radius: 10px;
  font-family: ${typography.robotoRegular}, 'Arial Narrow';
`;

const StyledDate = styled.span`
  display: block;
  font-family: ${typography.robotoRegular}, 'Arial Narrow';
  font-size: 12px;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.codeComment};
`;

const Title = styled.h4`
  margin-bottom: 10px;
`;

const PostAbstract = styled.p`
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.07em;
  font-family: ${typography.robotoLight}, 'Arial Narrow';
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
    tags,
  } = data;

  const truncate = (text, length) =>
    text.length > length ? `${text.slice(0, length)}...` : text;

  const truncatedSummary = truncate(summary, 220);

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
        <Tags>
          {tags.map(({ tag, id }) => (
            <Tag key={id}>{tag}</Tag>
          ))}
        </Tags>
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
    id: propTypes.string,
    title: propTypes.string,
    summary: propTypes.string,
    heroImage: propTypes.shape({ gatsbyImageData: propTypes.shape({}) }),
    slug: propTypes.string,
    publishedDate: propTypes.string,
    tags: propTypes.arrayOf(
      propTypes.shape({
        tag: propTypes.string,
        id: propTypes.string,
      })
    ),
  }).isRequired,
};

export default BlogPostCard;

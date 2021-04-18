import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Card from './Card';

const imageStyles = {
  height: '210px',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
};

const Description = styled.div`
  padding: 15px;
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
  font-size: 0.78em;
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
  const { title, description, image, link } = data;

  return (
    <Card>
      <GatsbyImage
        image={getImage(image)}
        imgStyle={imageStyles}
        style={imageStyles}
        alt="Blog Post Image"
      />
      <Description>
        <Title>{title}</Title>
        <PostAbstract>{description}</PostAbstract>
      </Description>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <CardButton text="CZYTAJ" />
      </a>
    </Card>
  );
};

BlogPostCard.propTypes = {
  data: propTypes.shape({
    title: propTypes.string,
    description: propTypes.string,
    image: propTypes.shape({ childImageSharp: propTypes.shape({}) }),
    link: propTypes.string,
  }).isRequired,
};

export default BlogPostCard;

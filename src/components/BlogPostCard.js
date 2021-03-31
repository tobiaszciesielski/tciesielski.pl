import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Button from './Button';
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

const BlogPostCard = () => {
  const { postImage } = useStaticQuery(graphql`
    {
      postImage: file(relativePath: { eq: "blog-post-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: TRACED_SVG
            tracedSVGOptions: { color: "#fff", background: "#00ffa3" }
            layout: CONSTRAINED
          )
        }
      }
    }
  `);

  return (
    <Card>
      <GatsbyImage
        image={getImage(postImage)}
        style={imageStyles}
        alt="Blog Post Image"
      />
      <Description>
        <Title>Blog w Gatsby.js</Title>
        <PostAbstract>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odio
          cupiditate similique quam deserunt quod amet corporis recusandae.
        </PostAbstract>
      </Description>
      <CardButton text="CZYTAJ" />
    </Card>
  );
};

export default BlogPostCard;

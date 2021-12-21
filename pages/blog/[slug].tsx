import React from 'react';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { getAllSlugs, getPostData } from '../../lib/posts';
import { PostData } from '../../types/post';

export interface Meta {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
}

const Post: NextPage<PostData> = (props) => {
  return <div dangerouslySetInnerHTML={{ __html: props.content }}></div>;
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAllSlugs().map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (props) => {
  const slug = props.params?.slug as string;
  return {
    props: { ...getPostData(slug) },
  };
};

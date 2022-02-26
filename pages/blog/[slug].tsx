import React from 'react';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Header } from '../../components/Header';
import { PostContent } from '../../components/PostContent';
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
  return (
    <>
      <NextSeo title={props.title} description={props.excerpt}></NextSeo>

      <Header title={props.title} />

      <PostContent content={props.content} />
    </>
  );
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
  const post = await getPostData(slug);
  return {
    props: post,
  };
};

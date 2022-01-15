import React from 'react';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

import { Header } from '../../components/Header';
import { getAllSlugs, getPostData } from '../../lib/posts';
import { PostData } from '../../types/post';

import styles from './post.module.scss';

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
      <Head>
        <link rel="stylesheet" href="/code.css" />
      </Head>

      <Header title={props.title} />

      <article
        className={styles.post}
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></article>
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

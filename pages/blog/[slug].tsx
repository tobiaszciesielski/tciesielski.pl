import React from 'react';

import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';
import { micromark } from 'micromark';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

export interface Meta {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
}

const Post: NextPage = ({ post: { d, c } }: any) => {
  return (
    <div>
      <h1>{d.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: c }}></div>
    </div>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDirectory);

  const slugs: { params: { slug: string } }[] = files.map((mdFile) => {
    return { params: { slug: mdFile.replace(/\.md$/, '') } };
  });

  return {
    paths: slugs,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (props) => {
  const postsDirectory = join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDirectory);

  const posts: any = files.map((mdFile) => {
    const slug = mdFile.replace(/\.md$/, '');

    if (slug === props.params?.slug) {
      const fullPath = join(postsDirectory, mdFile);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const d = data as Meta;
      const c = micromark(content);
      return { d, c };
    }
  });

  return {
    props: { post: posts[0] },
  };
};

import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';
import type { GetStaticProps, NextPage } from 'next';

import { Header } from '../components/Header';
import { PostList, PostListProps } from '../components/PostList';

const Home: NextPage<PostListProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <hr />
      <PostList posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDirectory);

  const posts: { title: string; slug: string }[] = files.map((mdFile) => {
    const slug = mdFile.replace(/\.md$/, '');

    const fullPath = join(postsDirectory, mdFile);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return { title: data.title, slug };
  });

  return {
    props: { posts },
  };
};

export default Home;

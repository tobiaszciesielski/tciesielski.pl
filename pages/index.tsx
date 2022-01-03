import type { GetStaticProps, NextPage } from 'next';

import { Header } from '../components/Header';
import { PostList, PostListProps } from '../components/PostList';
import { getAllPostsMeta } from '../lib/posts';

const Home: NextPage<PostListProps> = (props) => {
  return (
    <>
      <Header />
      <hr />
      <PostList postsMeta={props.postsMeta} />
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: { postsMeta: getAllPostsMeta() },
  };
};

export default Home;

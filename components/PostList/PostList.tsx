import Link from 'next/link';

import styles from './postList.module.scss';

export interface PostListProps {
  posts: { title: string; slug: string }[];
}

export default function PostList(props: PostListProps) {
  return (
    <ul className={styles['post-list']}>
      {props.posts.map(({ title, slug }) => (
        <li key={slug}>
          <Link href={`blog/${slug}`} passHref>
            <a>
              <h2 className={styles['post-list__post']}>{title}</h2>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
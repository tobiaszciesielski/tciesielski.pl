import Link from 'next/link';

import { PostMeta } from '../../types/post';

import styles from './postList.module.scss';

export interface PostListProps {
  postsMeta: PostMeta[];
}

export default function PostList(props: PostListProps) {
  return (
    <ul className={styles['post-list']}>
      {props.postsMeta.map(({ title, slug, excerpt, date }) => (
        <li key={slug}>
          <Link href={`/blog/${slug}`} passHref>
            <a>
              <span>{date}</span>
              <h2 className={styles['post-list__post']}>{title}</h2>
              <p>{excerpt}</p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

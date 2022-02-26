import Link from 'next/link';

import { PostMeta } from '../../types/post';

import styles from './postList.module.scss';

export interface PostListProps {
  postsMeta: PostMeta[];
}

export default function PostList(props: PostListProps) {
  return (
    <ul className={styles['postList']}>
      {props.postsMeta.map(({ title, slug, excerpt, date, category }) => (
        <li key={slug} className={styles.postList__post}>
          <Link href={`/blog/${slug}`} passHref>
            <a className="underline-link-animation">
              <h2>{title}</h2>
            </a>
          </Link>
          <p>{excerpt}</p>
          <span>
            {date} &bull; {category}
          </span>
        </li>
      ))}
    </ul>
  );
}

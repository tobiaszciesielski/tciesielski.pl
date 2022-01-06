import Link from 'next/link';

import { PostMeta } from '../../types/post';

import styles from './postList.module.scss';

export interface PostListProps {
  postsMeta: PostMeta[];
}

export default function PostList(props: PostListProps) {
  return (
    <ul className={styles['post-list']}>
      {props.postsMeta.map(({ title, slug, excerpt, date, category }) => (
        <li key={slug} className={styles['post-list__post']}>
          <Link href={`/blog/${slug}`} passHref>
            <a>
              <h2 className="underline-link-animation">{title}</h2>
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

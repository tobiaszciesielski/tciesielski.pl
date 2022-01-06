import Link from 'next/link';

import styles from './404.module.scss';

export default function Custom404() {
  return (
    <div className={styles['not-found']}>
      <p>Strona, której szukasz nie istnieje</p>
      <Link href={'/'} passHref>
        <a>
          <h1>Powrót do strony głównej</h1>
        </a>
      </Link>
    </div>
  );
}

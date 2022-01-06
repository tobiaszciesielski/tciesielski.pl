import Link from 'next/link';

import { Logo } from '../Logo';

import styles from './navbar.module.scss';

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <Link href={'/'} passHref>
        <a>
          <Logo width={45} height={45} />
        </a>
      </Link>

      <Link href={'/'} passHref>
        <a className={styles.navbar__item + ' underline-link-animation'}>
          Home
        </a>
      </Link>
    </nav>
  );
}

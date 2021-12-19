import Link from 'next/link';

import { Logo } from '../Logo';

import styles from './navbar.module.scss';

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <Logo width={45} height={45} />

      <Link href={'/'} passHref>
        <a className={styles.navbar__home}>Home</a>
      </Link>
    </nav>
  );
}

import Link from 'next/link';

import { Logo } from '../Logo';

import styles from './navbar.module.scss';

import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href={'/'} passHref>
        <a>
          <Logo />
        </a>
      </Link>

      <div className={styles.navbar__items}>
        <NavbarItem path="/" name="Home" />
        <NavbarItem path="/about" name="O mnie" />
      </div>
    </nav>
  );
}

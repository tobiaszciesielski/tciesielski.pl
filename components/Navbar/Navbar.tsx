import Link from 'next/link';

import { Logo } from '../Logo';

import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href={'/'} passHref>
        <a>
          <Logo width={45} height={45} />
        </a>
      </Link>

      <div className={styles.navbar__items}>
        <NavbarItem path="/" name="Home" />
        <NavbarItem path="/about" name="O mnie" />
      </div>
    </nav>
  );
}

interface NavbarItemProps {
  path: string;
  name: string;
}

const NavbarItem = ({ path, name }: NavbarItemProps) => {
  return (
    <Link href={path} passHref>
      <a className={styles.navbar__item + ' underline-link-animation'}>
        {name}
      </a>
    </Link>
  );
};

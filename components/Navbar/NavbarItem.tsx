import Link from 'next/link';

import styles from './navbar.module.scss';

interface NavbarItemProps {
  path: string;
  name: string;
}

export default function NavbarItem(props: NavbarItemProps) {
  return (
    <Link href={props.path} passHref>
      <a className={styles.navbar__item + ' underline-link-animation'}>
        {props.name}
      </a>
    </Link>
  );
}

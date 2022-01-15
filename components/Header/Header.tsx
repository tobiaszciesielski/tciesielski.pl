import styles from './header.module.scss';

export interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  return (
    <header>
      <h1 className={styles.header}>{props.title}</h1>
    </header>
  );
}

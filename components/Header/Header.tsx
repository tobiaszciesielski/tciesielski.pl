import { Logo } from '../Logo';

import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <Logo width={100} height={100} />
      <h1>Hello</h1>
      <p>Its my blog. Please enjoy it.</p>
    </div>
  );
}

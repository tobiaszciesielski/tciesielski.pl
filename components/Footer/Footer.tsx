import React from 'react';

import HeartIcon from '../../assets/icons/heart.svg';

import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Stworzone z</p>
      <HeartIcon className={`icon ${styles.icon_heart}`} />
      <p>przez Tobiasz Ciesielski</p>
    </footer>
  );
}

import React from 'react';

import styles from './layout.module.scss';
export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__content}>
        dupawdoajwdij
        <h1>aijdaw</h1>
        <h3>ijdawid</h3>
        {props.children}
      </div>
    </div>
  );
}

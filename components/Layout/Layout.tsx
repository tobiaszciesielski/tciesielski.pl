import React from 'react';

import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
import { Newsletter } from '../Newsletter';

import styles from './layout.module.scss';
export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__content}>
        <Navbar />
        {props.children}
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

import type { NextPage } from 'next';

import { Logo } from '../components/Logo';

import styles from './index.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles['coming-soon']}>
      <div className={styles['coming-soon__content']}>
        <Logo width={100} height={100} />
        <p>New version is coming soon</p>
      </div>
    </div>
  );
};

export default Home;

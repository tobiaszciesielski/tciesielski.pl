import type { NextPage } from 'next';
import Image from 'next/image';

import { Header } from '../components/Header';
import Socials from '../components/Socials/Socials';

import styles from './about.module.scss';

const About: NextPage = () => {
  return (
    <>
      <Header title="Poznajmy się bliżej" />
      <div className={styles.about}>
        <div>
          <h2>Cześć!</h2>
          <p>
            Mam na imię Tobiasz i jestem programistą front-end. Czerpię mnóstwo
            frajdy z tego co robię i ciągle szukam nowych wyzwań i możliwości,
            żeby poszerzać swoją wiedzę.
          </p>
          <p>
            Najważniejsze dla mnie jest bycie świadomym oraz pragmatycznym
            programistą, dlatego też uwielbiam rozbijać wszystko na czynniki
            pierwsze.
          </p>
          <p>
            Poniżej zamieściłem kilka pytań z odpowiedziami, które możliwe, że
            Cię zainteresują lub nawet zainspirują.
          </p>
          <p>Nie zapomnij też odwiedzić moich sociali.</p>
          <Socials />
        </div>
        <Image
          className={styles.about__image}
          width={380}
          height={500}
          src="/images/me.jpeg"
          alt="Tobiasz Ciesielski"
        />
      </div>
    </>
  );
};

export default About;

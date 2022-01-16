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
        <div className={styles.about__me}>
          <div>
            <h2>Cześć!</h2>
            <p>
              Mam na imię Tobiasz i jestem programistą front-end. Czerpię
              mnóstwo frajdy z tego co robię i ciągle szukam nowych wyzwań i
              możliwości, żeby poszerzać swoją wiedzę.
            </p>
            <p>
              Najważniejsze dla mnie jest bycie świadomym oraz pragmatycznym
              programistą, dlatego też uwielbiam rozbijać wszystko na czynniki
              pierwsze.
            </p>
            <p>Sprawdź moje social media.</p>
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
        <div className={styles.about__questions}>
          <div>
            <h3>Technologie</h3>
            <p>
              Moim pierwszym wyborem był React, który tworzyszy mi do tej pory.
              Kolejnym narzędziem jest Angular, którego używam na codzień w
              pracy. Nie zapominam o fundamentach i cały czas dostkonalę świętą
              trójcę front-endowca - HTML, CSS, JS.
            </p>
          </div>
          <div>
            <h3>Rozwój</h3>
            <p>
              Jestem fanem podcastów - <i>Piątki po deployu</i>,
              <i> Porozmawiajmy o IT</i> oraz <i>Przeprogramowani</i> to moje
              ulubione kanały. Coraz częściej sięgam po książki techniczne i
              rozwojowe. Subskrybuję kilka newsletterów z branży, dzięki którym
              jestem na bieżąco. Śledzę również wiele ciekawych osób w social
              mediach.
            </p>
            <p></p>
          </div>
          <div>
            <h3>Praca</h3>
            <p>
              Aktualnie pracuję w Prowly. Jest to moja pierwsza praca w branży,
              która podniosła poprzeczkę bardzo wysoko. Cenię sobię możliwość
              rozwoju, elastyczność pracy oraz świetnych, ambitnych i
              profesjonalnych ludzi.
            </p>
          </div>
          <div>
            <h3>Nauka</h3>
            <p>
              Jestem inżynierem Automatyki i Robotyki. Aktualnie studiuję Informatykę na II stopniu. Oba kierunki na Politechnice Poznańskiej.
              Aktywnie działam w kole naukowym AKAI, gdzie poznałem wielu przyjaciół. Uwielbiam dzielić się wiedzą i wymieniać doświadczeniem z innymi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

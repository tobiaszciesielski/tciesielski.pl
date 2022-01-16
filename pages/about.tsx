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
              mnóstwo frajdy z tego, co robię i ciągle szukam nowych wyzwań i
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
          <div className={styles.about__image}>
            <Image
              width={380}
              height={500}
              src="/images/me.jpeg"
              alt="Tobiasz Ciesielski"
            />
          </div>
        </div>
        <div className={styles.about__questions}>
          <div>
            <h3>Technologie</h3>
            <p>
              Moim pierwszym wyborem był React, który towarzyszy mi do tej pory.
              Kolejnym narzędziem jest Angular, którego używam na co dzień w
              pracy. Nie zapominam o fundamentach i cały czas dostkonale świętą
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
              która podniosła poprzeczkę bardzo wysoko. Cenię sobie możliwość
              rozwoju, elastyczność pracy oraz świetnych, ambitnych i
              profesjonalnych ludzi.
            </p>
          </div>
          <div>
            <h3>Nauka</h3>
            <p>
              Jestem inżynierem Automatyki i Robotyki. Aktualnie studiuję
              Informatykę na II stopniu. Oba kierunki na Politechnice
              Poznańskiej. Aktywnie działam w kole naukowym{' '}
              <a
                href="https://akai.org.pl/"
                rel="noreferrer"
                target="_blank"
                className="underline-link-animation"
              >
                AKAI
              </a>
              , gdzie poznałem wielu przyjaciół. Uwielbiam dzielić się wiedzą i
              wymieniać doświadczeniem z innymi.
            </p>
          </div>
          <div>
            <h3>Setup</h3>
            <p>
              Jestem gadżeciarzem, więc tej pozycji nie mogło zabraknąć.
              Posiadam dwie klawiatury Keychrone K6 i Logitech MX Keys Mini.
              Myszki też są w parze z Logitech - MX Master 3 i G Pro. Od
              niedawna pracuję na C49RG90, który wciąż robi na mnie wrażenie.
              Całość zasila Macbook Pro M1 13&quot;.
            </p>
          </div>
          <div>
            <h3>Zainteresowania</h3>
            <p>
              Sport to nieodłączna część mojego życia - regularnie trenuję na
              siłowni, a w sezonie pokonuję długie trasy na kolarzówce. Lubię
              resetować głowę, grając w gry i oglądając dobre filmy. Interesuję
              się gotowaniem, kawą, szachami, dietetyką, technologiami i
              inwestowaniem. Pewnie coś jeszcze by się znalazło.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

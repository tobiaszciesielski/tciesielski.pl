import React from 'react';

import { GithubIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from '../../assets/icons';

import styles from './socials.module.scss';

const SOCIALS = [
  { link: 'http://github.com/tobiaszciesielski', icon: GithubIcon },
  {
    link: 'https://www.linkedin.com/in/tobiaszciesielski/',
    icon: LinkedinIcon,
  },
  {
    link: 'https://www.instagram.com/tobiaszciesielski_/',
    icon: InstagramIcon,
  },
  {
    link: 'https://www.youtube.com/channel/UC-wgrlV6oxD3swLCD6y36jQ',
    icon: YoutubeIcon
  }
];

export default function Socials() {
  return (
    <div className={styles.socials}>
      {SOCIALS.map(({ link, icon: Icon }) => (
        <a
          key={link}
          href={link}
          className="iconLink"
          target="_blank"
          rel="noreferrer"
        >
          <Icon className={styles.socials__icon + ' icon'} />
        </a>
      ))}
    </div>
  );
}

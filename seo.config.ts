import { DefaultSeoProps } from 'next-seo';

const defaultTitle = 'Tobiasz Ciesielski | Front End Devloper';
const defaultDescription = 'Blog poświęcony programowaniu';
const defaultUrl = 'https://tciesielski.pl/';
const twitterProfile = '@tobi_lan_kenobi';

export const defaultSeo: DefaultSeoProps = {
  description: defaultDescription,
  titleTemplate: '%s | Tobiasz Ciesielski',
  defaultTitle: defaultTitle,
  canonical: defaultUrl,
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: defaultUrl,
    site_name: 'SiteName',
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    handle: twitterProfile,
    site: twitterProfile,
    cardType: 'summary_large_image',
  },
};

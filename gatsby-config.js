module.exports = {
  siteMetadata: {
    title: 'Tobiasz Ciesielski · Web Developer · Blogger',
    titleTemplate: '%s · Tobiasz Ciesielski',
    description:
      'Tobiasz Ciesielski - Front-End developer oraz twórca bloga poświęconemu Web Developmentowi i nie tylko.',
    url: 'https://tciesielski.pl',
    image: '/images/meta-image.png',
    subTitle: ['front-end developer', 'blogger', 'designer'],
    about: {
      introduction: [
        'Jestem web-developerem. Aktualnie skupiam się na frontendzie.',
        'Nie są mi jednak obce technologie backendowe.',
      ],
      expansion:
        'W swojej karierze zahaczyłem też o machine learning oraz mobile-development.',
      conclusion:
        'Swoją podróż dokumentuję na blogu, do którego serdecznie Cię zapraszam.',
    },
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tciesielski.pl`,
        short_name: `tciesielski.pl`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#00ffa3`,
        display: `standalone`,
        icon: 'src/assets/images/favicon.png',
      },
    },
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
  ],
};

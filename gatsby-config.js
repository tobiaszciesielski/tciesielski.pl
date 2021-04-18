module.exports = {
  siteMetadata: {
    title: 'tciesielski.pl',
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
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
  ],
};

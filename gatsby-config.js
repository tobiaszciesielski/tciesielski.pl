require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Tobiasz Ciesielski · Web Developer · Blogger',
    titleTemplate: '%s | tciesielski.pl',
    description:
      'Tobiasz Ciesielski - Front-End developer oraz twórca bloga poświęconemu Web Developmentowi i nie tylko.',
    url: 'https://tciesielski.pl',
    image: 'images/meta-image.png',
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/assets/posts/`,
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
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_CMS_TOKEN,
        preview: false,
        disableLiveReload: false,
      },
    },
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-remark`,
  ],
};

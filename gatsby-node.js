const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect, createPage } = actions;

  createRedirect({
    fromPath: 'https://tciesielski.com/*',
    toPath: 'https://www.tciesielski.pl/',
    isPermanent: true,
    force: true,
  });

  const { data } = await graphql(`
query MyQuery {
  allDatoCmsPost {
    nodes {
      slug
    }
  }
}
  `);

  const blogPostTemplate = path.resolve(`./src/components/templates/Post.js`);
  data.allDatoCmsPost.nodes.forEach(({ slug }) => {
    createPage({
      path: `/blog/${slug}`,
      component: blogPostTemplate,
      context: {
        slug,
      },
    });
  });
};

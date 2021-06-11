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
    query Posts {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  const blogPostTemplate = path.resolve(`./src/components/templates/Post.js`);
  data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug } = node.frontmatter;
    createPage({
      path: `/blog/${slug}`,
      component: blogPostTemplate,
      context: {
        slug,
      },
    });
  });
};

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: 'https://tciesielski.com/*',
    toPath: 'https://www.tciesielski.pl/',
    isPermanent: true,
    force: true,
  });
};

const find = require('./find');

const isFeatured = async (self, req, slug) => {
  const flags = await find(self, req);

  return flags[slug];
};

module.exports = {
  isFeatured,
};

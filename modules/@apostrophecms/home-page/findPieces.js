const findBlogs = require('../../blog/find');

module.exports = async (self, req, count) => {
  if (req && req.data && req.data.page && [ '@apostrophecms/home-page',
    'about-page' ].includes(req.data.page.type)) {
    return { blogs: await findBlogs(self, req, count) };
  }
};

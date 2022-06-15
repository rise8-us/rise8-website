const { findOthersByTopic } = require('../blog/find');

module.exports = async (self, req) => {
  if (req && req.data && req.data.page && [ 'blog-page' ].includes(req.data.page.type)) {
    const otherBlogsByTopic = req.data.piece && await findOthersByTopic(self, req, req.data.piece._id, req.data.piece._topic[0], 3);

    return {
      otherBlogsByTopic,
    };
  }
};

const find = async (self, req, count) => {
  const blogs = await self.apos.modules.blog.find(req)
    .sort({ createdAt: -1 })
    .limit(count)
    .project({
      title: 1,
      subtitle: 1,
      minutes: 1,
      image: 1,
      _url: 1,
      _author: 1,
      publishedAt: 1,
    })
    .toArray();

  for (let i = blogs.length; i < 3; i++) {
    blogs.push({});
  }

  return blogs;
};

const findOthersByTopic = async (self, req, currentId, topic, count) => {
  const criteria = {
    _id: topic._id,
  };

  const topics = await self.apos.modules.topic.find(req, criteria)
    .limit(1)
    .toArray();

  if (topics.length > 0) {
    const blogs = topics[0]._blogs.filter(blog => blog._id !== currentId).slice(0, count);

    return blogs.length > 0 ? blogs : undefined;
  }
};

module.exports = {
  find,
  findOthersByTopic,
};

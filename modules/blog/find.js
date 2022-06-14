module.exports = async (self, req, count) => {
  return await self.apos.modules.blog.find(req)
    .sort({ createdAt: -1 })
    .limit(count)
    .project({
      title: 1,
      subtitle: 1,
      minutes: 1,
      _url: 1,
      _author: 1,
      publishedAt: 1,
    })
    .toArray();
};

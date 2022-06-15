module.exports = async (self, req) => {
  return await self.apos.modules.tip.find(req)
    .project({
      title: 1,
      _url: 1,
      _riser: 1,
      publishedAt: 1,
    })
    .toArray();
};

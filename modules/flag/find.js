module.exports = async (self, req) => {
  return await self.apos.modules.flag.find(req)
    .project({
      slug: 1,
      enabled: 1,
    })
    .toArray();
};

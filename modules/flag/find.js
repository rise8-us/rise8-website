module.exports = async (self, req) => {
  const flags = await self.apos.modules.flag.find(req)
    .project({
      slug: 1,
      enabled: 1,
    })
    .toArray();

  const flagsBySlug = {};
  for (const flag of flags) {
    flagsBySlug[flag.slug] = flag.enabled;
  }

  return flagsBySlug;
};

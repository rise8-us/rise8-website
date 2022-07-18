const hasFlagEnabledUser = (flag, req) => {
  return req.user ? flag.usersIds.includes(req.user._id) : false;
};

module.exports = async (self, req) => {
  const flags = await self.apos.modules.flag.find(req)
    .project({
      slug: 1,
      enabled: 1,
      _users: 1,
    })
    .toArray();

  const flagsBySlug = {};
  for (const flag of flags) {
    flagsBySlug[flag.slug] = flag.enabled || hasFlagEnabledUser(flag, req);
  }

  return flagsBySlug;
};

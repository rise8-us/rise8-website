const { findByPageType: findBannersByPageType } = require('../../banner/find');
const findFlags = require('../../flag/find');

module.exports = async (self, req) => {
  if (req && req.data && req.data.page) {
    return {
      flags: await findFlags(self, req).catch(() => []),
      banners: await findBannersByPageType(self, req).catch(() => []),
    };
  }

  return {};
};

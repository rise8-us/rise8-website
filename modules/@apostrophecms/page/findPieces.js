const { findByPageType: findBannersByPageType } = require('../../banner/find');

module.exports = async (self, req) => {
  if (req && req.data && req.data.page) {
    return {
      banners: await findBannersByPageType(self, req).catch(() => []),
    };
  }

  return {};
};

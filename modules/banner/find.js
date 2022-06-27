const findByPageType = async (self, req) => {
  const banners = await self.apos.modules.banner.find(req)
    .sort({ priority: -1 })
    .project({
      title: 1,
      _pages: 1,
    })
    .toArray();

  return banners.filter(banner => {
    return banner._pages.map(page => page.type).includes(
      req.data.page.type);
  }).map(banner => {
    const {
      _pages,
      pagesIds,
      pagesFields,
      ...otherFields
    } = banner;

    return {
      ...otherFields,
    };
  });
};

module.exports = {
  findByPageType,
};

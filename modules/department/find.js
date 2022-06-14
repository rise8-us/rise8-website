module.exports = async (self, req) => {
  return await self.apos.modules.department.find(req).toArray();
};

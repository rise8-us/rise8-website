const findTips = require('../tip/find');

module.exports = async (self, req) => {
  if (req && req.data && req.data.page && [ 'careers-page' ].includes(req.data.page.type)) {
    return {
      tips: await findTips(self, req),
    };
  }
};

const findDepartments = require('../department/find');

module.exports = async (self, req) => {
  if (req && req.data && req.data.page &&
    [ 'about-page', 'careers-page' ].includes(req.data.page.type)) {
    return {
      departments: await findDepartments(self, req),
    };
  }
};

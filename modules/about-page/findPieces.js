const findDepartments = require('../department/find');

module.exports = async (self, req) => {
  if ([ 'about-page' ].includes(req.data.page.type)) {
    return {
      departments: await findDepartments(self, req)
    };
  }
};

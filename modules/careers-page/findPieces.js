const findTips = require('../tip/find');

const getJobs = async (self) => {
  return self.apos.http.get('https://rise8.breezy.hr/json');
};

module.exports = async (self, req) => {
  if (req && req.data && req.data.page && [ 'careers-page' ].includes(req.data.page.type)) {
    const jobs = await getJobs(self).catch(() => null);
    return {
      jobs: mapJobsByDepartment(jobs),
      tips: await findTips(self, req),
    };
  }
};

const mapJobsByDepartment = (jobs) => {
  const jobMap = {};

  jobs.forEach(job => {
    const department = job.department.replace(' ', '_');
    job = {
      ...job,
      display_location: calcJobDisplayLocation(job.location),
    };
    if (jobMap[department]) {
      const jobArray = jobMap[department];
      jobArray.push(job);
      jobMap[department] = jobArray;
    } else {
      jobMap[department] = [ job ];
    }
  });

  return jobMap;
};

const calcJobDisplayLocation = (location) => {
  let display = '';
  if (location.name) {
    display = location.name;
    if (location.is_remote) {
      display += ' or Remote';
    }
  }
  return display || 'Remote';
};

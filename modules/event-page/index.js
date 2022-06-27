module.exports = {
  extend: '@apostrophecms/piece-page-type',
  options: {
    label: 'Event Page',
  },
  fields: {
    add: {},
    group: {},
  },
  methods: function (self) {
    return {
      async indexPage(req) {
        req.notFound = true;
      },
    };
  },
};

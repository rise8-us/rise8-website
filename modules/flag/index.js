module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Flag',
    pluralLabel: 'Flags',
    seoFields: false,
  },
  fields: {
    add: {
      title: {
        label: 'Name',
        type: 'string',
      },
      enabled: {
        label: 'Enabled',
        type: 'boolean',
        def: false,
      },
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'enabled' ],
      },
    },
  },
};

module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Banner',
    pluralLabel: 'Banners',
    seoFields: false,
  },
  fields: {
    add: {
      title: {
        label: 'Title',
        type: 'string',
      },
      priority: {
        label: 'Priority',
        type: 'integer',
        help: 'The priority of the banner. The higher the number, the higher the priority.',
        def: 0,
      },
      _pages: {
        label: 'Pages',
        type: 'relationship',
        withType: '@apostrophecms/page',
      },
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'priority', '_pages' ],
      },
    },
  },
};

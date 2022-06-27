module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Event',
    pluralLabel: 'Events',
  },
  fields: {
    add: {
      title: {
        label: 'Title',
        type: 'string',
        required: true,
      },
      startDate: {
        label: 'Start Date',
        type: 'dateAndTime',
        required: true,
      },
      endDate: {
        label: 'End Date',
        type: 'dateAndTime',
        required: true,
      },
      _presenters: {
        type: 'relationship',
        label: 'Speakers & Panelists',
        withType: 'person',
        fields: {
          add: {
            featured: {
              type: 'boolean',
              label: 'Featured',
              def: false,
            },
          },
        },
      },
      heroImage: {
        label: 'Hero Banner',
        type: 'area',
        required: true,
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {},
          },
        },
      },
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'startDate', 'endDate', '_presenters' ],
      },
      page: {
        label: 'Page',
        fields: [ 'heroImage' ],
      },
    },
  },
};

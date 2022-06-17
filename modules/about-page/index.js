module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'About Page',
  },
  fields: {
    add: {
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
      images: {
        label: 'Images',
        fields: [
          'heroImage',
        ],
      },
    },
  },
};

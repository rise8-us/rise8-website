module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Careers Page',
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
      coreValues: {
        label: 'Core Values',
        type: 'area',
        required: true,
        options: {
          min: 5,
          max: 5,
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
          'coreValues',
        ],
      },
    },
  },
};

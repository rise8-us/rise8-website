module.exports = {
  extend: '@apostrophecms/piece-page-type',
  options: {
    label: 'Blog Page',
    perPage: 6,
  },
  fields: {
    add: {
      _featured: {
        label: 'Featured Blog',
        type: 'relationship',
        withType: 'blog',
        max: 1,
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
      basic: {
        label: 'Basic',
        fields: [ '_featured' ],
      },
      images: {
        label: 'Images',
        fields: [
          'heroImage',
        ],
      },
    },
  },
};

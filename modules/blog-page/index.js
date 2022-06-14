module.exports = {
  extend: '@apostrophecms/piece-page-type',
  options: {
    label: 'Blog Page',
  },
  fields: {
    add: {
      _featured: {
        label: 'Featured Blog',
        type: 'relationship',
        withType: 'blog',
        max: 1,
      },
    },
    group: {
      basic: {
        label: 'Basic',
        fields: [ '_featured' ],
      },
    },
  },
};

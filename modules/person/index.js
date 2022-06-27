module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Person',
    pluralLabel: 'People',
    seoFields: false,
  },
  fields: {
    add: {
      title: {
        label: 'Name',
        type: 'string',
        required: true,
      },
      role: {
        label: 'Role',
        type: 'string',
      },
      photo: {
        label: 'Photo',
        type: 'area',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {
              minSize: [ 240, 240 ],
            },
          },
        },
      },
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'role', 'photo' ],
      },
    },
  },
};

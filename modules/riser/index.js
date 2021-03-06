module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Riser',
    pluralLabel: 'Risers',
  },
  fields: {
    add: {
      title: {
        label: 'Name',
        type: 'string',
        required: true,
      },
      role: {
        type: 'string',
      },
      bio: {
        type: 'string',
        textarea: true,
      },
      quote: {
        type: 'string',
        textarea: true,
        max: 280,
        help: 'Don\'t add quotation marks, we\'ll do that for you!',
      },
      photo: {
        label: 'Bio Photo',
        type: 'area',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {
              minSize: [ 528, 644 ],
            },
          },
        },
      },
      _departments: {
        type: 'relationshipReverse',
        label: 'Departments',
        withType: 'department',
        reverseOf: '_risers',
      },
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'role', 'bio', 'quote', 'photo' ],
      },
    },
  },
};

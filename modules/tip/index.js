module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Tip',
    pluralLabels: 'Tips',
  },
  fields: {
    add: {
      title: {
        required: true,
        label: 'Quote',
        type: 'string',
        textarea: true,
        help: 'Don\'t add quotation marks, we\'ll do that for you!',
      },
      _riser: {
        required: true,
        type: 'relationship',
        label: 'Riser',
        withType: 'riser',
        max: 1,
      },
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', '_riser' ],
      },
    },
  },
};

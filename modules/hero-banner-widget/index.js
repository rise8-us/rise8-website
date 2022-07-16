module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Hero Banner',
  },
  fields: {
    add: {
      columnLeft: {
        type: 'area',
        label: 'Left Column',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
          },
        },
      },
      columnRight: {
        type: 'area',
        label: 'Right Column',
        options: {
          widgets: {
            '@apostrophecms/image': {},
          },
        },
      },
    },
  },
};

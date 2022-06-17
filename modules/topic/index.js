module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Topic',
    pluralLabels: 'Topics',
    searchable: false,
  },
  fields: {
    add: {
      _blogs: {
        type: 'relationshipReverse',
        label: 'Blogs',
        withType: 'blog',
        reverseOf: '_topic',
      },
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title' ],
      },
    },
  },
};

module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Department',
    pluralLabel: 'Departments'
  },
  fields: {
    add: {
      _risers: {
        type: 'relationship',
        label: 'Risers',
        withType: 'riser'
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', '_risers' ]
      }
    }
  }
};

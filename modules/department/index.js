module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Department',
    pluralLabel: 'Departments',
  },
  fields: {
    add: {
      _risers: {
        type: 'relationship',
        label: 'Risers',
        withType: 'riser',
        help: 'The top 3 risers in this list will be featured in the "Let\'s Make Some Intros" section',
      },
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', '_risers' ],
      },
    },
  },
};

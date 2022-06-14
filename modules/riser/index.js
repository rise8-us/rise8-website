module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Riser',
    pluralLabel: 'Risers'
  },
  fields: {
    add: {
      title: {
        label: 'Name',
        type: 'string'
      },
      role: {
        type: 'string'
      },
      bio: {
        type: 'string',
        textarea: true
      },
      quote: {
        type: 'string',
        textarea: true,
        max: 280
      },
      _departments: {
        type: 'relationshipReverse',
        label: 'Departments',
        withType: 'department',
        reverseOf: '_risers'
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'role', 'bio', 'quote' ]
      }
    }
  }
};

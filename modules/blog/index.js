module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Blog',
    pluralLabels: 'Blogs',
  },
  fields: {
    add: {
      slug: {
        required: true,
        type: 'slug',
      },
      subtitle: {
        type: 'string',
      },
      videoUrl: {
        type: 'url',
      },
      body: {
        type: 'string',
        textarea: true,
      },
      minutes: {
        type: 'integer',
      },
      quote: {
        type: 'string',
        textarea: true,
      },
      _topic: {
        required: true,
        type: 'relationship',
        label: 'Blog Topic',
        withType: 'topic',
        max: 1,
      },
      _author: {
        required: true,
        type: 'relationship',
        label: 'Blog Author',
        withType: 'riser',
        max: 1,
      },
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'subtitle',
          'videoUrl',
          'body',
          'minutes',
          'quote',
          '_topic',
          '_author',
        ],
      },
    },
  },
};

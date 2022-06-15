module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Blog',
    pluralLabels: 'Blogs',
  },
  fields: {
    add: {
      blogType: {
        type: 'select',
        required: true,
        choices: [
          {
            label: 'Read',
            value: 'read',
          },
          {
            label: 'Listen',
            value: 'listen',
          },
          {
            label: 'Watch',
            value: 'watch',
          },
        ],
      },
      slug: {
        required: true,
        type: 'slug',
      },
      shortTitle: {
        required: true,
        type: 'string',
      },
      subtitle: {
        required: true,
        type: 'string',
      },
      image: {
        required: true,
        type: 'area',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {},
          },
        },
      },
      embedUrl: {
        required: true,
        type: 'url',
        if: {
          $or: [
            { blogType: 'watch' },
            { blogType: 'listen' },
          ],
        },
      },
      bodyText: {
        required: true,
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {
              toolbar: [ 'styles', 'italic' ],
              styles: [
                {
                  tag: 'p',
                  label: 'Paragraph (P)',
                },
              ],
            },
          },
        },
      },
      minutes: {
        required: true,
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
          'image',
          'shortTitle',
          'subtitle',
          'blogType',
          'embedUrl',
          'bodyText',
          'minutes',
          'quote',
          '_topic',
          '_author',
        ],
      },
    },
  },
};

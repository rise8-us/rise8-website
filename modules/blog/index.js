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
            '@apostrophecms/image': {},
            '@apostrophecms/rich-text': {
              toolbar: [
                'styles',
                '|',
                'bold',
                'italic',
                'strike',
                'link',
                'horizontalRule',
                '|',
                'bulletList',
                'orderedList',
                '|',
                'blockquote',
                'codeBlock',
                '|',
                'undo',
                'redo',
              ],
              styles: [
                {
                  tag: 'p',
                  label: 'Paragraph (P)',
                },
                {
                  tag: 'h2',
                  label: 'Heading 2 (H2)',
                },
                {
                  tag: 'h3',
                  label: 'Heading 3 (H3)',
                },
                {
                  tag: 'h4',
                  label: 'Heading 4 (H4)',
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
        type: 'relationship',
        label: 'Blog Author',
        withType: 'riser',
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

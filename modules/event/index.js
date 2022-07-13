module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Event',
    pluralLabel: 'Events',
  },
  fields: {
    add: {
      title: {
        label: 'Title',
        type: 'string',
        required: true,
      },
      displayTitle: {
        label: 'Display Title',
        type: 'string',
        help: 'Will default to the title above if unspecified',
      },
      subtitle: {
        label: 'Subtitle',
        type: 'string',
        help: 'Will default to event dates if unspecified',
      },
      description: {
        label: 'Description',
        required: true,
        type: 'area',
        options: {
          max: 1,
          widgets: {
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
      startDate: {
        label: 'Start Date',
        type: 'dateAndTime',
        required: true,
      },
      endDate: {
        label: 'End Date',
        type: 'dateAndTime',
        required: true,
      },
      _presenters: {
        type: 'relationship',
        label: 'Speakers & Panelists',
        withType: 'person',
        fields: {
          add: {
            featured: {
              type: 'boolean',
              label: 'Featured',
              def: false,
            },
            disabled: {
              type: 'boolean',
              label: 'Disabled',
              def: false,
            },
          },
        },
      },
      heroImage: {
        label: 'Hero Banner',
        type: 'area',
        required: true,
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {},
          },
        },
      },
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'displayTitle', 'subtitle', 'description', 'startDate', 'endDate', '_presenters' ],
      },
      page: {
        label: 'Page',
        fields: [ 'heroImage' ],
      },
    },
  },
};

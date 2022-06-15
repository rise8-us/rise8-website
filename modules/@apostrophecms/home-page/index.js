module.exports = {
  options: {
    label: 'Home Page',
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {
              toolbar: [
                'styles',
                '|',
                'bold',
                'italic',
                'strike',
                'link',
                '|',
                'bulletList',
                'orderedList',
              ],
              styles: [
                {
                  tag: 'p',
                  label: 'Paragraph (P)',
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
            '@apostrophecms/image': {},
            '@apostrophecms/video': {},
          },
        },
      },
      cloudPlatformsImage: {
        label: 'Cloud + Platforms',
        type: 'area',
        required: true,
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {},
          },
        },
      },
      pipelinesPathwaysImage: {
        label: 'Pipelines + Pathways',
        type: 'area',
        required: true,
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {},
          },
        },
      },
      appsDigitalProductsImage: {
        label: 'Applications + Digital Products',
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
        fields: [
          'title',
          'main',
        ],
      },
      images: {
        label: 'Images',
        fields: [
          'cloudPlatformsImage',
          'pipelinesPathwaysImage',
          'appsDigitalProductsImage',
        ],
      },
    },
  },
};

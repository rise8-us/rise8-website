const pageType = require('apostrophe/modules/@apostrophecms/page-type/index.js');

const { REDIRECT_EVENTS_TO_EVENT } = require('../../lib/flags');
const { isFeatured } = require('../flag/flag');
const { shouldRedirectToEvent } = require('../event-page/redirectToEvent');

module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Prodacity Page',
  },
  fields: {
    add: {
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
      images: {
        label: 'Images',
        fields: [
          'heroImage',
        ],
      },
    },
  },
  handlers: function (self) {
    return {
      '@apostrophecms/page:serve': {
        async dispatchPage(req) {
          if (await isFeatured(self, req, REDIRECT_EVENTS_TO_EVENT) && shouldRedirectToEvent(req.url)) {
            req.notFound = true;
            return;
          }

          await pageType.handlers(self)['@apostrophecms/page:serve'].dispatchPage(req);
        },
      },
    };
  },
};

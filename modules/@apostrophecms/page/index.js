const findAboutPagePieces = require('../../about-page/findPieces.js');
// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  handlers(self, options) {
    return {
      beforeSend: {
        async handlerName(req) {
          const data = {
            ...await findAboutPagePieces(self, req)
          };

          req.data = {
            ...req.data,
            ...data
          };
        }
      }
    };
  },
  options: {
    types: [
      {
        name: 'default-page',
        label: 'Default'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Home'
      }
    ],
    park: [
      {
        slug: '/services',
        parkedId: 'servicesId',
        title: 'Services',
        type: 'services-page'
      },
      {
        slug: '/about',
        parkedId: 'aboutUsId',
        title: 'About Us',
        type: 'about-page'
      },
      {
        slug: '/blog',
        parkedId: 'blogId',
        title: 'Blog',
        type: 'blog-page'
      },
      {
        slug: '/careers',
        parkedId: 'careersId',
        title: 'Careers',
        type: 'careers-page'
      },
      {
        slug: '/contact',
        parkedId: 'contactId',
        title: 'Contact',
        type: 'contact-page'
      }
    ]
  }
};

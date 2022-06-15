const findAboutPagePieces = require('../../about-page/findPieces.js');
const findBlogs = require('../home-page/findPieces.js');
// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  handlers(self, options) {
    return {
      beforeSend: {
        async handlerName(req) {
          const aboutPagePieces = await findAboutPagePieces(self, req);
          const blogPieces = await findBlogs(self, req, 3);
          const data = {
            ...aboutPagePieces,
            ...blogPieces,
          };

          req.data = {
            ...req.data,
            ...data,
          };
        },
      },
    };
  },
  options: {
    types: [
      {
        name: 'default-page',
        label: 'Default',
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Home',
      },
    ],
    park: [
      {
        slug: '/services',
        parkedId: 'servicesId',
        title: 'Services',
        type: 'services-page',
      },
      {
        slug: '/about',
        parkedId: 'aboutUsId',
        title: 'About Us',
        type: 'about-page',
      },
      {
        slug: '/blog',
        parkedId: 'blogId',
        title: 'Blog',
        type: 'blog-page',
      },
      {
        slug: '/careers',
        parkedId: 'careersId',
        title: 'Careers',
        type: 'careers-page',
      },
      {
        slug: '/contact',
        parkedId: 'contactId',
        title: 'Contact',
        type: 'contact-page',
      },
      {
        slug: '/events/prodacity',
        parkedId: 'prodacityId',
        title: 'Prodacity',
        type: 'prodacity-page',
      },
      {
        slug: '/privacy-policy',
        parkedId: 'privacyPolicyId',
        title: 'Privacy Policy',
        type: 'privacy-page',
      },
    ],
  },
};

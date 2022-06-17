const findAboutPagePieces = require('../../about-page/findPieces');
const findHomePagePieces = require('../home-page/findPieces');
const findBlogPagePieces = require('../../blog-page/findPieces');
const findTipPagePieces = require('../../careers-page/findPieces');
const { shouldRedirectToBlog, redirectToBlog } = require('../../blog-page/redirectToBlog');

// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  handlers(self, options) {
    return {
      beforeSend: {
        async handlerName(req) {
          const data = {
            ...await findAboutPagePieces(self, req),
            ...await findBlogPagePieces(self, req),
            ...await findHomePagePieces(self, req, 3),
            ...await findTipPagePieces(self, req),
          };

          req.data = {
            ...req.data,
            ...data,
          };
        },
      },
      notFound: {
        async handlerName(req) {
          if (shouldRedirectToBlog(req.url)) {
            redirectToBlog(req);
          }
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

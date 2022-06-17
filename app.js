require('apostrophe')({
  shortName: 'rise8-website',
  modules: {
    '@apostrophecms/db': {
      options: {
        uri: `mongodb://rise8:${process.env.DB_PASSWORD}@${process.env.DB_IP_ADDRESS}:27017/rise8-${process.env.DEPLOY_ENV}?authSource=admin`,
      },
    },
    '@apostrophecms/search': {},
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'bp-rich-text',
      },
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'bp-image-widget',
      },
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'bp-video-widget',
      },
    },
    // `asset` supports the project's webpack build for client-side assets.
    asset: {},
    blog: {},
    department: {},
    riser: {},
    tip: {},
    topic: {},
    'about-page': {},
    'blog-page': {},
    'careers-page': {},
    'contact-page': {},
    'default-page': {},
    'prodacity-page': {},
    'privacy-page': {},
    'services-page': {},
  },
});

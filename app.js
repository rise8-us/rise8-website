require('apostrophe')({
  shortName: 'rise8-website',
  modules: {
    // Apostrophe module configuration
    // *******************************
    //
    // NOTE: most configuration occurs in the respective modules' directories.
    // See modules/@apostrophecms/page/index.js for an example.
    //
    // Any modules that are not present by default in Apostrophe must at least
    // have a minimal configuration here to turn them on: `moduleName: {}`
    // ***********************************************************************
    // `className` options set custom CSS classes for Apostrophe core widgets.
    '@apostrophecms/db': {
      options: {
        uri: `mongodb://rise8:${process.env.DB_PASSWORD}@${process.env.DB_IP_ADDRESS}:27017/rise8-${process.env.DEPLOY_ENV}?authSource=admin`
      }
    },
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'bp-rich-text'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'bp-image-widget'
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'bp-video-widget'
      }
    },
    // `asset` supports the project's webpack build for client-side assets.
    asset: {},
    // The project's first custom page type.
    'default-page': {},
    'services-page': {},
    'blog-page': {},
    'about-page': {},
    'careers-page': {},
    'contact-page': {}
  }
});

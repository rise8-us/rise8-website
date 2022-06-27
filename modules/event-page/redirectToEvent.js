const shouldRedirectToEvent = (url) => {
  return url.match(/\/events\//);
};

const redirectToEvent = (req) => {
  req.redirect = req.url.replace(/\/events\//, '/event/');
};

module.exports = {
  shouldRedirectToEvent,
  redirectToEvent,
};

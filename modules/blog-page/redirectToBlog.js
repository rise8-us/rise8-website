const shouldRedirectToBlog = (url) => {
  return url.match(/\/thoughts\//);
};

const redirectToBlog = (req) => {
  req.redirect = req.url.replace(/\/thoughts\//, '/blog/');
};

module.exports = {
  shouldRedirectToBlog,
  redirectToBlog,
};

const {
  shouldRedirectToBlog,
  redirectToBlog,
} = require('./redirectToBlog');

describe('redirectToBlog', () => {
  it.each`
  url | expectedLength
  ${'rise8.us/thoughts'} | ${1}
  ${'rise8.us/thoughts/'} | ${1}
  ${'rise8.us/thoughts/on-stuff'} | ${1}
  ${'rise8.us/thoughts/thoughts-on-stuff'} | ${1}
  ${'rise8.us/thoughts/i-have-lots-o-thoughts'} | ${1}
  ${'rise8.us/blog'} | ${null}
  ${'rise8.us/blog/on-thoughts'} | ${null}
  ${'rise8.us/blog/thoughts-on-blogs'} | ${null}
  `('should determine if redirect is necessary', ({ url, expectedLength }) => {
    if (!expectedLength) expect(shouldRedirectToBlog(url)).toBeNull();
    else expect(shouldRedirectToBlog(url)).toHaveLength(expectedLength);
  });

  it.each`
  url | expectedUrl
  ${'rise8.us/thoughts'} | ${'rise8.us/blog/'}
  ${'rise8.us/thoughts/'} | ${'rise8.us/blog/'}
  ${'rise8.us/thoughts/on-stuff'} | ${'rise8.us/blog/on-stuff'}
  ${'rise8.us/thoughts/thoughts-on-stuff'} | ${'rise8.us/blog/thoughts-on-stuff'}
  ${'rise8.us/thoughts/i-have-lots-o-thoughts'} | ${'rise8.us/blog/i-have-lots-o-thoughts'}
  ${'rise8.us/blog'} | ${'rise8.us/blog'}
  ${'rise8.us/blog/on-thoughts'} | ${'rise8.us/blog/on-thoughts'}
  ${'rise8.us/blog/thoughts-on-blogs'} | ${'rise8.us/blog/thoughts-on-blogs'}
  `('should replace thoughts for blog in url', ({ url, expectedUrl }) => {
    const req = { url };
    redirectToBlog(req);
    expect(req.redirect).toEqual(expectedUrl);
  });
});

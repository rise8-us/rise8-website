const { findByPageType } = require('./find');

const toArray = jest.fn();

const apostrophe = {
  apos: {
    modules: {
      banner: {
        find: jest.fn(() => {
          const mongoResponse = {
            sort: jest.fn(() => mongoResponse),
            project: jest.fn(() => mongoResponse),
            toArray,
          };

          return mongoResponse;
        }),
      },
    },
  },
};

describe('find', () => {
  describe('findByPageType', () => {
    it('should find by page type', async () => {
      const testBanner = {
        title: 'test',
        _pages: [ { type: 'test-page' } ],
      };
      const testBanner2 = {
        title: 'test2',
        _pages: [ { type: 'test2-page' } ],
      };
      const {
        _pages,
        ...expectedBanner
      } = testBanner;

      toArray.mockReturnValueOnce([ testBanner, testBanner2 ]);

      const pageBanners = await findByPageType(apostrophe,
        { data: { page: { type: 'test-page' } } });

      expect(pageBanners).toEqual([expectedBanner]);
    });
  });
});

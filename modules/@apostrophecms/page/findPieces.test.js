const findPieces = require('./findPieces');
const { findByPageType } = require('../../banner/find');
const findFlags = require('../../flag/find');

jest.mock('../../banner/find');
jest.mock('../../flag/find');

describe('findPieces', () => {
  it('should find pieces', async () => {
    const banners = [ { title: 'test' } ];
    const flags = [
      {
        title: 'Test Flag',
        slug: 'test-flag',
        enabled: true,
      },
    ];

    findByPageType.mockImplementation(() => Promise.resolve(banners));
    findFlags.mockImplementation(() => Promise.resolve(flags));

    const pieces = await findPieces({}, { data: { page: {} } });

    expect(pieces).toEqual({
      flags,
      banners,
    });
  });

  it('should find empty arrays given errors are thrown', async () => {
    findByPageType.mockRejectedValue(new Error('error'));
    findFlags.mockRejectedValue(new Error('error'));

    const pieces = await findPieces({}, { data: { page: {} } });

    expect(pieces).toEqual({
      flags: [],
      banners: [],
    });
  });

  it.each(
    [
      [ {}, undefined ],
      [ {}, null ],
      [ {}, {} ],
      [ {}, { data: {} } ],
      [ {}, { data: { page: undefined } } ],
      [ {}, { data: { page: null } } ],
    ])('should return an empty object given no page',
    async (apostrophe, req) => {
      const result = await findPieces(apostrophe, req);

      expect(result).toEqual({});
    });
});

const findPieces = require('./findPieces');
const { findByPageType } = require('../../banner/find');

jest.mock('../../banner/find');

describe('findPieces', () => {
  it('should find pieces', async () => {
    findByPageType.mockImplementation(() => Promise.resolve([ { title: 'test' } ]));

    const pieces = await findPieces({}, { data: { page: {} } });

    expect(pieces).toEqual({
      banners: [ { title: 'test' } ],
    });
  });

  it('should find empty banners array given an error is thrown', async () => {
    findByPageType.mockRejectedValue(new Error('error'));

    const pieces = await findPieces({}, { data: { page: {} } });

    expect(pieces).toEqual({
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
    ])('should return an empty object given no page', async (apostrophe, req) => {
    const result = await findPieces(apostrophe, req);

    expect(result).toEqual({});
  });
});

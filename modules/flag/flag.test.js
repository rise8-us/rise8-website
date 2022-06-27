const { isFeatured } = require('./flag');
const find = require('./find');

jest.mock('./find');

describe('flag', () => {
  describe('isFeatured', () => {
    it.each([
      [ { 'test-flag': true }, true ],
      [ { 'test-flag': false }, false ],
    ])('should return flag enabled', async (flags, expected) => {
      find.mockResolvedValue(flags);

      const result = await isFeatured({}, {}, 'test-flag');
      expect(result).toBe(expected);
    });
  });
});

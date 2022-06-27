const find = require('./find');

const toArray = jest.fn();

const apostrophe = {
  apos: {
    modules: {
      flag: {
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
  it('should find by page type', async () => {
    const testFlag = {
      title: 'Test Flag',
      slug: 'test-flag',
      enabled: true,
    };

    toArray.mockReturnValueOnce([ testFlag ]);

    const flags = await find(apostrophe, {});

    expect(flags).toEqual({ 'test-flag': true });
  });
});

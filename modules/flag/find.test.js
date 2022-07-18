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

const req = {
  user: {
    _id: 'user_id',
  },
};

describe('find', () => {
  it('should find flag true when enabled true', async () => {
    const testFlag = {
      title: 'Test Flag',
      slug: 'test-flag',
      enabled: true,
      usersIds: [],
    };

    toArray.mockReturnValueOnce([ testFlag ]);

    const flags = await find(apostrophe, req);

    expect(flags).toEqual({ 'test-flag': true });
  });

  it('should find flag true when user added and enabled false', async () => {
    const testFlag = {
      title: 'Test Flag',
      slug: 'test-flag',
      enabled: false,
      usersIds: [ 'user_id' ],
    };

    toArray.mockReturnValueOnce([ testFlag ]);

    const flags = await find(apostrophe, req);

    expect(flags).toEqual({ 'test-flag': true });
  });

  it('should not find flag true when disabled and empty users', async () => {
    const testFlag = {
      title: 'Test Flag',
      slug: 'test-flag',
      enabled: false,
      usersIds: [],
    };

    toArray.mockReturnValueOnce([ testFlag ]);

    const flags = await find(apostrophe, req);

    expect(flags).toEqual({ 'test-flag': false });
  });

  it('should not find flag true when non-user', async () => {
    const testFlag = {
      title: 'Test Flag',
      slug: 'test-flag',
      enabled: false,
      usersIds: [ 'user_id' ],
    };
    const req = {};

    toArray.mockReturnValueOnce([ testFlag ]);

    const flags = await find(apostrophe, req);

    expect(flags).toEqual({ 'test-flag': false });
  });
});

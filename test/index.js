let assert = require('assert');
const { parseArgs } = require('..');

describe('it parses arguments', () => {
  it('returns an object with correctly parsed args', () => {
    const args = [1, 2, '-a', 'b', 'c' , '-d'];
    assert.deepEqual(parseArgs(args), {'-a': 'b', '-d': null});
  });
});

const versionedCached = require('../lib/versioned-cache')

describe('versioned cache', () => {
  let cache = null
  beforeAll(() => {
    cache = new versionedCached()
  })
  it.each([
    ['PUT key1 5', 'PUT(#1) key1 = 5'],
    ['PUT key2 6', 'PUT(#2) key2 = 6'],
    ['GET key1', 'GET key1 = 5'],
    ['GET key1 1', 'GET key1(#1) = 5'],
    ['GET key2 2', 'GET key2(#2) = 6'],
    ['PUT key1 7', 'PUT(#3) key1 = 7'],
    ['GET key1 1', 'GET key1(#1) = 5'],
    ['GET key1 2', 'GET key1(#2) = 5'],
    ['GET key1 3', 'GET key1(#3) = 7'],
    ['GET key4', 'GET key4 = <NULL>'],
    ['GET key1 4', 'GET key1(#4) = 7'],
    ['GET key2 1', 'GET key2(#1) = <NULL>'],
  ])('should respond accordingly', (input, output) => {
    expect(cache.handleCommand(input)).toEqual(output);
  })
})

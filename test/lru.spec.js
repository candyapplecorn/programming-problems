const LRU = require('../lib/lru')

describe('lru', () => {
  it('should accept a max number of items', () => {
    const size = 3
    const lru = new LRU(size)
    expect(lru.size).toEqual(size)
  })

  it('should implement upsert', () => {
    expect(LRU.prototype.upsert).toEqual(expect.any(Function))
  })
  it('should be able to prints its contents', () => {
    expect(LRU.prototype.print).toEqual(expect.any(Function))
  })

  it('should implement a getItems method that returns a list of its items', () => {
    const items = [1, 2, 3]
    const lru = new LRU(size)
    items.forEach(lru.upsert.bind(lru))
    expect(lru.geItems().sort()).toEqual(expect.arrayContaining(items))
  })

  it.each([
    { size: 3, items: [1, 2, 3, 4], expectedContents: [2, 3, 4] },
    { size: 3, items: [1, 2, 3, 4, 4, 2, 5], expectedContents: [2, 4, 5] },
    { size: 1, items: [1, 2, 3], expectedContents: [3] },
  ])('should store the most recently used items', ({ size, items, expectedContents }) => {
    const lru = new LRU(size)
    items.forEach(lru.upsert.bind(lru))
    const currentItems = lru.getItems().sort();
    expect(currentItems).toHaveLength(size)
    expect(currentItems).toEqual(expect.arrayContaining(expectedContents))
  })
})

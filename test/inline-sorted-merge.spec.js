const mergeSortedLists = require('../lib/inline-sorted-merge');

describe('inline sorted merge', () => {
  it.each([
    [[1, 2, 3, , ,], [-1, 4], [-1, 1, 2, 3, 4]],
    [[1, 2, 3, , ,], [], [1, 2, 3, , ,]],
    [[10, 15, 20, , , , , ,], [1, 2, 3, 17, 21], [1, 2, 3, 10, 15, 17, 20, 21]],
  ])(`should merge %o and %o`, (l1, l2, expected) => {
    const numItemsInL1 = l1.filter(Number.isSafeInteger).length
    const merged = mergeSortedLists(l1, numItemsInL1, l2, l2.length);

    expect(merged).toHaveLength(expected.length);
    expect(merged).toEqual(expect.arrayContaining(expected));
  })
})

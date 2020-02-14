const LinkedList = require('../lib/linked-list');

describe('linked list', () => {
  it.each([
    [[1, 2, 3], 0, 1],
    [[1, 2, 3, 4], 3, 4],
    [[], 10, null],
  ])('should get an item by index; list: %o, index: %i, expected: %i', (items, index, expected) => {
    const ll = new LinkedList(items)
    expect(ll.at(index)).toEqual(expected);
  });

  describe('add', () => {
    it('should append an item to an empty list', () => {
      const ll = new LinkedList([])
      ll.add(10)
      expect(ll.at(0)).toEqual(10);
      expect(ll.tail.value).toEqual(10);
    });
    it('should append an item', () => {
      const ll = new LinkedList([1, 2])
      expect(ll.tail.value).toEqual(2);
      ll.add(3)
      expect(ll.at(2)).toEqual(3);
      expect(ll.tail.value).toEqual(3);
    });
  });

  describe('reverse', () => {
    it('should reverse the list', () => {
      const ll = new LinkedList([1, 2, 3])
      for (let i = 0; i < 3; i++) {
        expect(ll.at(i)).toEqual(i + 1)
      }
      ll.reverse();
      for (let i = 2; i >= 0; i--) {
        expect(ll.at(i)).toEqual(3 - i)
      }
    });
  });
})

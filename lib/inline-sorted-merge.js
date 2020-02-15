/*
ConsumeStack stores a pointer to a list (list),
and a pointer (topIndex) to an item in that list.
It wraps around a list and lets the user consume
each item in the list once via pop()
*/
class ConsumeStack {
  constructor(list, topIndex) {
    this.list = list
    this.topIndex = topIndex
  }
  get empty() { return this.topIndex < 0 }
  get top() { return this.list[this.topIndex] }
  pop() { return this.list[this.topIndex--] }
  static takeHighest(a, b) {
    return a.empty ? b.pop() :
      b.empty ? a.pop() :
      a.top > b.top ? a.pop() :
      b.pop()
  }
}

function inlineSortedMerge(
  destinationList, numItemsInDest,
  additiveList, numItemsInAdd
) {
  const destStack = new ConsumeStack(destinationList, numItemsInDest - 1)
  const addStack = new ConsumeStack(additiveList, numItemsInAdd - 1)
  let index = numItemsInDest + numItemsInAdd - 1

  while (index >= 0)
    destinationList[index--] = ConsumeStack.takeHighest(destStack, addStack)

  return destinationList
}

module.exports = inlineSortedMerge

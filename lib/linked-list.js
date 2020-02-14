class Node {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(list = []) {
    this.root = null;
    this.tail = null;
    this.length = 0;
    list.forEach(item => {
      this.add(item)
    })
  }
  add(val) {
    const item = new Node(val)

    if (this.root === null) {
      this.root = item;
      this.tail = item;
    } else {
      this.tail.next = item;
      this.tail = item;
    }
    this.length++
  }
  at(index) {
    let current = this.root;
    while (index > 0) {
      if (current === null) {
        return null;
      }
      current = current.next
      index--
    }
    return current.value;
  }
  getAsList() {
    let current = this.root;
    let items = [];
    while (current) {
      items.push(current.value)
      current = current.next
    }
    return items;
  }
  print() {
    console.log(this.getAsList())
  }
  reverse() {
    let a = null
    let b = this.root;
    let c = this.root && this.root.next

    while(b) {
      b.next = a
      a = b
      b = c
      c = c && c.next
    }

    const oldRoot = this.root;
    this.root = this.tail;
    this.tail = oldRoot;
  }
}

module.exports = LinkedList

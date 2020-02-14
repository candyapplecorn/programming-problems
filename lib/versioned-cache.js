class Node {
  constructor(value, version) {
    this.value = value
    this.version = version
    this.leftChild = null
    this.rightChild = null
  }
}

class Tree {
  constructor(){
    this.root = []
  }
  get(ver) {
    const first = this.root[0]
    if (!first) {
      return null
    }
    if (first.version > ver) {
      return null
    }
    const last = this.root[this.root.length - 1]
    if (last.version <= ver) {
      return last
    }

    for (let i = 0; i < this.root.length; i++) {
      const current = this.root[i];
      const next = this.root[i + 1];

      if (current.version <= ver && next && next.version >= ver) {
        return current.value
      }
    }
    // current = this.root
    //
    // while ()
    //
    // while (
    //   (current.version < val && current.rightChild !== null) ||
    //   (current.version >= val && current.leftChild !== null)
    // ) {
    //   if (current.version < val && current.rightChild !== null) {
    //     current = current.rightChild
    //   } else if (current.version >= val && current.leftChild === null) {
    //     current = current.leftChild
    //   }
    // }
    //
    // if (current.version < val) {
    //   current.rightChild = new Node(val, ver)
    // } else if (current.version >= val && current.leftChild === null) {
    //   current.leftChild = new Node(val, ver)
    // }
  }
  add(value, version) {
    this.root.push({ value, version })
    return;
  //   if (this.root === null) {
  //     this.root = new Node(val, ver)
  //   } else {
  //     current = this.root
  //
  //     while (
  //       (current.value < val && current.rightChild !== null) ||
  //       (current.value >= val && current.leftChild !== null)
  //     ) {
  //       if (current.value < val && current.rightChild !== null) {
  //         current = current.rightChild
  //       } else if (current.value >= val && current.leftChild === null) {
  //         current = current.leftChild
  //       }
  //     }
  //
  //     if (current.value < val) {
  //       current.rightChild = new Node(val, ver)
  //     } else if (current.value >= val && current.leftChild === null) {
  //       current.leftChild = new Node(val, ver)
  //     }
  //   }
  // }
  }
}

class VersionedCache {
  constructor() {
    this.COMMANDS = { PUT: 'PUT', GET: 'GET' };
    this.version = 1
    this.keys = {}
  }
  handleCommand(command) {
    let { verb, key, value } = VersionedCache.parseCommand(command)
    let output = ''
    if (verb === this.COMMANDS.PUT) {
      output = this.put(key, value)
    } else if (verb === this.COMMANDS.GET) {
      if (command === 'GET key1 3') {
        console.log(`version: ${value}`)
      }
      output = this.get(key, value)
    } else throw new Error(`Unrecognized command ${verb}`);

    return output
  }
  static parseCommand(command) {
    const [verb, key, value] = command.split(' ')
    return { verb, key, value }
  }
  put(item, value, version) {
    version = this.version++
    if (!this.keys[item]) {
      this.keys[item] = new Tree()
    }
    const tree = this.keys[item]

    tree.add(value, version)
    return `PUT(#${version}) ${item} = ${value}`
  }
  get(item, version) { //3
    let versioned = false
    if (version) {
      versioned = true
      version = this.version
    }
    const tree = this.keys[item]
    if (!tree) {
      const versionedString = versioned ? `(#${version})` : '';
      return `GET ${item} = <NULL>`
    }
    let result = tree.get(version)

    if (result) {
      result = result.value
    }

    const versionedString = versioned ? `(#${version})` : '';
    return `GET ${item}${versionedString} = ${result}`
  }
}

module.exports = VersionedCache

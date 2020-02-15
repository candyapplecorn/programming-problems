class SortedKeyValueList extends Array {
  get(ver) {
    const first = this[0]
    if (!first || first.version > ver) return null;
    if (!ver) return this[this.length - 1];
    return this[this.binarySearch(ver)]
  }
  binarySearch(ver) {
      let start = 0;
      let end = this.length - 1;

      while (end > start) {
        const midIndex = Math.floor((end + start) / 2);
        const nextIndex = midIndex + 1;
        const midVersion = this[midIndex].version;
        const nextVersion = this[nextIndex] ? this[nextIndex].version : null;

        if (midVersion > ver)
          end = midIndex - 1;
        else if (midVersion < ver && nextVersion > ver)
          return midIndex;
        else if (midVersion < ver)
          start = midIndex + 1;
        else
          return midIndex;
      }

      return start
  }
  add(value, version) { return this.push({ value, version }) }
}

class VersionedCache {
  constructor() {
    this.COMMANDS = { PUT: 'PUT', GET: 'GET' };
    this.version = 1
    this.keys = {}
  }
  handleCommand(command) {
    const { GET, PUT } = this.COMMANDS;
    const { verb, key, value } = VersionedCache.parseCommand(command)

    switch (verb) {
      case PUT: return this.put(key, value)
      case GET: return this.get(key, value)
      default: throw new Error(`Unrecognized command ${verb}`)
    }
  }
  static parseCommand(command) {
    const [verb, key, value] = command.split(' ')
    return { verb, key, value }
  }
  put(item, value, version) {
    version = this.version++
    if (!this.keys[item]) this.keys[item] = new SortedKeyValueList()
    const tree = this.keys[item]
    tree.add(value, version)
    return `PUT(#${version}) ${item} = ${value}`
  }
  get(item, version) {
    let versioned = false
    if (version)
      versioned = true
    else
      version = this.version

    const versionedString = versioned ? `(#${version})` : '';
    const tree = this.keys[item]
    if (!tree)
      return `GET ${item} = <NULL>`

    let result = tree.get(version)
    result = result && result.value !== null ? result.value : '<NULL>'

    return `GET ${item}${versionedString} = ${result}`
  }
}

module.exports = VersionedCache

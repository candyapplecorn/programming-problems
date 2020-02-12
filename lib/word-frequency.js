const fs = require('fs');

const getFileContents = fd => new Promise((r, rej) => {
  fs.readFile(fd, 'utf8', (err, data) => {
    if (err) rej(err)
    r(data)
  });
})

function getWordsFromBlob(blob) {
  return blob.split(/[\n\s]/).map(w => w.trim()).filter(Boolean)
}

function getSortedCounts(nums) {
  return nums.sort((a, b) =>
      a < b ? +1 : a === b ? 0 : -1
  );
}

function invertObject(obj) {
  return Object.keys(obj).reduce((accu, key) => {
    const count = obj[key];
    const previous = accu[count] || []
    accu[count] = [...previous, key].filter(Boolean)
    return accu;
  }, {})
}

async function wordFrequency(file, num) {
    const frequencies = {};
    const fileContents = await getFileContents(file);
    const words = getWordsFromBlob(fileContents);

    words.forEach(w => {
      frequencies[w] = frequencies[w] ? frequencies[w] + 1 : 1
    })

    const sortedNums = getSortedCounts(Object.values(frequencies));

    const firstNumCounts = sortedNums.slice(0, num);
    const inverted = invertObject(frequencies);

    const untrimmedList = firstNumCounts.reduce((list, count) => {
      return [...list, ...inverted[count]];
    }, [])

    return untrimmedList.slice(0, num)
}

module.exports = wordFrequency;

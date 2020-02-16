function backwardsForEach(list, cb) {
  for (let i = list.length - 1; i >= 0; i--)
    cb(list[i], i, list)
}

function getRightGreatestList(peaks) {
  const rightGreatest = [...Array(peaks.length)].map(l => 0)

  backwardsForEach(peaks, (element, index, list) => {
    const previous = rightGreatest[index + 1] || 0
    rightGreatest[index] = Math.max(element, previous)
  })

  return rightGreatest
}

function getCollectedRaindrops(peaks) {
  const rightGreatestList = getRightGreatestList(peaks)
  let sum = 0

  for (let i = 0, leftGreatest = peaks[i]; i < peaks.length; ++i) {
    const current = peaks[i]
    leftGreatest = Math.max(leftGreatest, current);
    const rightGreatest = rightGreatestList[i]
    const lowestNeighboringPeak = Math.min(leftGreatest, rightGreatest);
    sum += lowestNeighboringPeak - current
  }

  return sum
}

module.exports = getCollectedRaindrops;

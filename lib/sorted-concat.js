
function sortedConcat(append, target, appendLength, targetCount) {
  let endIndex = appendLength + targetCount - 1;
  let appendIndex = appendLength - 1;
  let targetIndex = targetCount - 1;

  while (endIndex >= 0) {
    const targetItem = target[targetIndex];
    const appendItem = append[appendIndex];
    
    if (appendItem > targetItem || targetIndex < 0) {
      target[endIndex] = appendItem;
      appendIndex--
    } else {
      target[endIndex] = targetItem;
      targetIndex--;
    }

    endIndex--
  }
  return target;
}

module.exports = sortedConcat

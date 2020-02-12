const raindrops = require('../lib/raindrops');
/*
Imagine a valley in the rain. Water will collect in the valley
since the valley's surround hills form a natural container, bowl
or basin.

Now imagine a 2D valley with hills or peaks described by numbers in a list:
  [0, 1, 2, 1, 2, 0]
This might look something like this:
      _   _
    _ _ _ _
  _ _ _ _ _ _

If water flows off infinitely to the left and right, then it collect in
the center of this imaginary hill; between the peaks described by '2' and
'2' (elements 3 and 5). The peak described by '1', sandwiched between '2'
and '2', is 1 shorter than its neighbors, and so 1 unit of water may collect.

Your task is to write a function which accepts a list of integers and
returns the amount of water that would collect in between the 'peaks'.

Sample inputs and outputs have been provided in the test suite.
*/

describe('raindrops', () => {
  it.each([
    [[0, 3, 0, 3, 0], 3],
    [[0, 3, 0, 1, 0], 1],
    [[0, 3, 0, 1, 5], 5],
    [[0, 3, 0, 1, 5, 0, 10, 3, 5, 0], 12],
    [[0, 1, 2, 3, 4, 5], 0],
    [[5, 4, 3, 2, 1], 0],
  ])('should compute rain collected for %o is %i', (peaks, rain) => {
    expect(raindrops(peaks)).toEqual(rain);
  });
});

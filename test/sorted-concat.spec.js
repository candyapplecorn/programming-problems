
/* ======================================================
Given a sorted (ascending) array containing n elements N,
and another sorted (ascending) array containing m elements AND
at least n empty spots after the m elements M, and the number of
non-empty elements in M, add all of the elements in the 1st
array to the 2nd.

Example:

N = [1, 2, 6]
M = [-1, 3, 5, 10, , , , ,]
N.length: 3
M.length: 9
Number of elements in M: 4

Consider time and memory usage & complexity
 ====================================================== */
const sortedConcat = require('../lib/sorted-concat');

const numAscSort = (a, b) => a < b ? -1 : a == b ? 0 : +1;
const getARandomNumber = range => Math.floor(Math.random() * range);
const randomSign = n => Math.random() > 0.5 ? -1 : +1;
const getRandomSignedNumber = () => randomSign() * getARandomNumber(100)
const getThreeRandomNumbers = () => [
  getRandomSignedNumber(),
  getRandomSignedNumber(),
  getRandomSignedNumber(),
];
const getArrayWithThreeEmptySpots = () => ([...getThreeRandomNumbers(),,,].sort(numAscSort));

describe('sorted concatenation', () => {
    it.each([
      [[-1, 2, 5], [1, 3, 4, , , ]],
      [[-10, -2, 5], [-30, 1, 3, 4, 12, , , ]],
      [[-10, -2, 5], getArrayWithThreeEmptySpots()],
      [[100, 200, 500], getArrayWithThreeEmptySpots()],
      [[-35, -20, -5], getArrayWithThreeEmptySpots()],
    ])(`it should concatenate %o with %o`, (append, target) => {
      const expected = [...append, ...target].filter(Number.isInteger).sort(numAscSort);
      const quantInTarget = target.filter(Number.isInteger).length

      expect(sortedConcat(append, target, append.length, quantInTarget)).toEqual(expect.arrayContaining(expected))
    })
})

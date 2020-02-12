/* ======================================================
 Given an input file of words, and a number n,
 find the n most frequently occurring words in the file.

 Optimize for space and time complexity.
 ====================================================== */

const wordFrequency = require('../lib/word-frequency');
const file = 'assets/repeating-words.txt';

describe('Word Frequency', () => {
	it('should find the most frequent n words', async () => {
		const n = 1;
		const mostFrequentWords = await wordFrequency(file, n);
		expect(mostFrequentWords).toEqual(expect.arrayContaining(['baz']))
	})
	it('should find the most frequent n words', async () => {
		const n = 2;
		const mostFrequentWords = await wordFrequency(file, n);
		expect(mostFrequentWords).toEqual(expect.arrayContaining(['baz', 'foo']))
	})
});

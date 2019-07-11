/* ======================================================
Given a list of words in /assets/words.txt, yield
a list of "Words of Words" which have the greatest
length. For example, if "BOAT" was the longest "Word
of Words" in the English language, then the list of
"Words of Words" would contain "BOAT" and any other
words of the same length (four characters). e.g,

    [..., "boat", ...]

Do not include "Words of Words" of lesser lengths.
 ====================================================== */

const longestWordOfWords = require('../lib/longest-word-of-words');

describe('Longest Word of Words', function () {
    const longestWordsofWords = [
        "brood",
        "proof",
        "sheer",
        "shoot",
        "skeel",
        "skeen",
        "yearn"
    ];

    describe('Given a dictionary text file', function () {
        it('Should yield the longest words of words', async () => {
            const longestWords = await longestWordOfWords();

            expect(longestWords).toEqual(expect.arrayContaining(longestWordsofWords));
        });
    });
});

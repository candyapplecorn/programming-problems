/*
A "Word of Words" is a word where, upon removing a character,
the remaining characters make a word. Take BOAT for example:

    _OAT    Popular with that Quaker guy
    B_AT    Produces a delicacy in some countries
    BO_T    Something I hope will do all my chores
    BOA_    Harry Potter can speak to this
 */

const fs = require('fs');

const getDict = async filepath => new Promise((resolve, reject) =>
    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) { reject(err); }
        resolve(data);
    })
);

const isAWordValidator = set => text => set.has(text);

const transformBulkTextToSet = bulkText => new Set(bulkText.split('\n'));

const isAWordOfWordValidator = (word, validator) => word
    .split('')
    .every((letter, position, letters) => {
        return validator([...letters].filter((_, index) => index !== position).join(''))
    });

const getWordsOfWords = list => {
    const isAWord = isAWordValidator(list);
    const hits = {};
    for (let word of list) {
        const hit = isAWordOfWordValidator(word, isAWord);
        if (hit) {
            hits[word.length] = (hits[word.length] || []).concat(word);
        }
    }
    return hits;
};

const getLongestWordsOfWords = wordOfWordsMap => {
    return wordOfWordsMap[Object
        .keys(wordOfWordsMap)
        .map(Number)
        .sort((a, b) => a < b)
        .shift()]
};

module.exports = async function main(filepath = 'assets/words.txt') {
    return getLongestWordsOfWords(
        getWordsOfWords(
            transformBulkTextToSet(
                await getDict(
                    filepath
                )
            )
        )
    );
};

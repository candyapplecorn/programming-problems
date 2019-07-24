const { ATTRIBUTES } = require('./constants/set');

class Deck {
    constructor() {
        this.cards = this.deckGenerator();
    }

    deckGenerator() {
        const sets = [];
        for (let color = 0; color < 3; color++)
            for (let shape = 0; shape < 3; shape++)
                for (let count = 0; count < 3; count++)
                    for (let fill = 0; fill < 3; fill++)
                        sets.push([color, shape, count, fill]);

        return sets.map(([color, shape, count, fill]) => {
            return new Card({
                color: Object.keys(ATTRIBUTES.COLORS)[color],
                shape: Object.keys(ATTRIBUTES.SHAPES)[shape],
                count: Object.keys(ATTRIBUTES.COUNTS)[count],
                fill: Object.keys(ATTRIBUTES.FILLS)[fill],
            })
        });
    }
}

class Card {
    constructor(card) {
        Object.keys(card).forEach(key => this[key] = card[key]);
    }
}

module.exports = {
    Card,
    Deck,
};

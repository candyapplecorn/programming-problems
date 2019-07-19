const { ATTRIBUTES } = require('./constants/set');
const { deepCopy, flatten, recurseToObject } = require('./helpers');

class Deck {
    constructor() {
        this.cards = flatten(this.deckGenerator(deepCopy(ATTRIBUTES)))
    }

    deckGenerator(attrs = ATTRIBUTES) {
        const attribute = Object.keys(attrs)[0]; // "COLOR"
        if (!attribute) {
            return [[{}]];
        }
        const {[attribute]: vals, ...rest} = attrs; // vals = ATTRIBUTES.COLOR

        const otherAttrCombos = this.deckGenerator(rest);

        return recurseToObject(otherAttrCombos, obj => {
            return Object.keys(vals).map(subattr => {
                return {
                    ...obj,
                    [attribute]: vals[subattr]
                };
            });
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
    ATTRIBUTES,
    deepCopy
};

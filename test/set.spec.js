const { Card, Deck } = require('../lib/set');
const { ATTRIBUTES } = require('../lib/constants/set');

const { COUNTS, COLORS, FILLS, SHAPES } = ATTRIBUTES;

describe('SET', () => {
    describe('DECK', () => {
        let deck;
        beforeAll(() => {
            deck = new Deck();
        });
        it('should be able to create an 81 card deck', async () => {
            expect(deck.cards).toHaveLength(Math.pow(3, 4));
        });
        it('should generate an entirely unique set of cards', async () => {
            const cardCompare = (a, b) => Object.keys(a).every(attr => a[attr] === b[attr]);
            for (let i = 0; i < deck.cards.length; i++)
                for (let j = i + 1; j < deck.cards.length; j++)
                    expect(cardCompare(deck.cards[i], deck.cards[j])).toBe(false);
        });
    });
    describe('CARDS', () => {
        it('should be able to make cards', async () => {
            const cards = [{
                count: COUNTS[0],
                shape: SHAPES.square,
                color: COLORS.red,
                fill: FILLS.empty
            }, {
                count: COUNTS[1],
                shape: SHAPES.circle,
                color: COLORS.blue,
                fill: FILLS.solid
            }, {
                count: COUNTS[2],
                shape: SHAPES.triangle,
                color: COLORS.green,
                fill: FILLS.lines
            }];

            const cardsInstances = cards.map(card => new Card(card));

            cardsInstances.forEach((card, i) => {
                const comparisons = ['count', 'shape', 'color', 'fill'];
                comparisons.forEach(
                    attribute => expect(card[attribute]).toEqual(cards[i][attribute])
                );
            })
        });
    });
});

/* ======================================================
Given an equation like:
    "2 + 4 + x = y"
And assuming y is either some prescribed value, or zero,
solve for X.
 ====================================================== */

const equationSolver = require('../lib/equation-solver');

describe('Equation Solver', () => {
    describe('Evaluating expressions without free variables', () => {
        describe.each([
            ['A number should evaluate to itself', "1", 1],
            ['Addition', "1 + 1", 2],
            ['More addition', "3 + 1 + 1", 5],
            ['Subtraction', "1 - 1", 0],
            ['More subtraction', "10 - 1 - 3", 6],
            ['Subtraction and addition', "100 + 100 - 100", 100],
        ])('%s\t%s = %d', (stmt, input, output) => {
            expect(equationSolver(input)).toEqual(output);
        });
    });
});

/* ======================================================
Bit manipulation is a fun topic. Most people know base
ten, and most programmers also know base two (binary).

For this problem, implement a Bit class that takes a base
and value as its construction arguments.

The class instance should be usable with arithmetic
operators (+, -, *, /) and also yield its bits.

The interface should be:

	const eightyOne = new Bit({ base: 10, value: 81 });
	eightyOne.bits.join('') === '81'

	const seven = new Bit({ base: 2, value: 7 })
	seven.bits.join('') === '111'

	seven + eightyOne === 88

 ====================================================== */

const Bit = require('../lib/bit');

describe('Bit', () => {
	const base = 3;
	const value = 81;

	it('should accept a base-10 number as a constructor arg', () => {
		const eightyOne = new Bit({ base, value });
		expect(eightyOne + 0).toEqual(value);
	});

	it('should be able to be added to other Bits', () => {
		const one = new Bit({ base: 2, value: 1 });
		const ten = new Bit({ base: 7, value: 10 });
		expect(one + ten).toEqual(11);
	});

	it('should handle negative numbers', () => {
		const negativeThree = new Bit({ base: 10, value: -3 });
		expect(negativeThree + 0).toEqual(-3)
	});

	describe('individual bits', () => {
		it('should yield its bits', () => {
			const eightyOne = new Bit({ base, value });
			expect(eightyOne.bits).toEqual([1, 0, 0, 0, 0]);
		});

		it('should yield bits for zero', () => {
			const zero = new Bit({ base: 10, value: 0 });
			expect(zero.bits).toEqual([0])
		});
	});
});

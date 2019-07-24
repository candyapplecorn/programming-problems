class Bit {
	constructor({ base = 10, value = 0 } = {}) {
		this.value = value;
		this.base = base;
		this._bits = null;
	}

	valueOf() {
		return this.value;
	}

	get bits() {
		if (!this._bits) {
			this._bits = this._calculateBits();
		}

		return this._bits;
	}

	_calculateBits() {
		const bits = [];

		let power = 0;
		let div = 0;

		do {
			div = Math.pow(this.base, power);
			const currentBit = Math.floor(this.value / div) % this.base;
			bits.unshift(currentBit);
			power++;
		} while (div < this.value);

		return bits;
	}
}

module.exports = Bit;

class CalculatorStack extends Array {
    constructor(expression) {
        super();
        if (Array.isArray(expression)) {
            this.push(...expression);
        } else if (typeof expression === 'string') {
            const atoms = CalculatorStack.split(expression);
            this.push(...atoms.map(atom => isNaN(Number.parseFloat(atom)) ? atom : Number.parseFloat(atom)));
        }
    }
    calculate() {
        if (this.length <= 1) {
            return this.top;
        }
        const atoms = new CalculatorStack(this);
        const evalStack = new CalculatorStack();

        CalculatorStack.PEMDAS.forEach(operators => {
            if (!evalStack.empty) {
                atoms.clear();
                atoms.push(...evalStack);
                evalStack.clear();
            }

            while (!atoms.empty) {
                const atom = atoms.shift();

                if (CalculatorStack.isOperator(atom)) {
                    evalStack.push(atom);
                } else if (CalculatorStack.isOperand(atom)) {
                    if (CalculatorStack.isOperator(evalStack.top)) {
                        if (operators.includes(evalStack.top)) {
                            const operator = evalStack.pop();
                            const lOperand = evalStack.pop();
                            const subResult = CalculatorStack.performArithmetic(lOperand, operator, atom);
                            evalStack.push(subResult);
                        } else {
                            evalStack.push(atom);
                        }
                    } else {
                        evalStack.push(atom);
                    }
                }
            }
        });

        return evalStack.top;
    }
    get top() { return this.length ? this[this.length - 1] : null; }
    get result() { return this.calculate(); }
    get empty() { return this.length === 0; }
    static isOperator(op) { return /^[+-/*]$/.test(op); }
    static isOperand(op) { return /-?\d+(\.\d+)?/.test(op); }
    static performArithmetic(lOperand, operator, rOperand) {
        switch (operator) {
            case '+':
                return lOperand + rOperand;
            case '-':
                return lOperand - rOperand;
            case '*':
                return lOperand * rOperand;
            case '/':
                return lOperand / rOperand;
        }
    }
    static get PEMDAS() {
        return [
            ['*', '/'],
            ['+', '-'],
        ];
    }
    static split(expr) { return expr.match((/[\d.]+|[+*/()-]/g)); }
    clear() { this.splice(0, this.length); }
}

function equationSolver(expression) {
    return new CalculatorStack(expression).result;
}

module.exports = equationSolver;

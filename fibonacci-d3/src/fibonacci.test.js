const fibonacci = require('./fibonacci.js')
const fibonacciNumber = fibonacci.number;
const fibonacciSequence = fibonacci.sequence;

const sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584]

test('The fibonacci number function should follow the fibonacci sequence', () => {
    for(let i = 0; i < sequence.length; i++) {
        expect(fibonacciNumber(i)).toBe(sequence[i]);
    }
})

test('The fibonacci sequence generator should return a correct sequence', () => {
    expect(fibonacciSequence(sequence.length)).toEqual(sequence)
})
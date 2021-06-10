const fs = require('fs')
const fibonacciToFile = require('./fibonacciToFile.js')

const sequence = [0, 1, 1, 2, 3, 5, 8]

test('Should create a file with the fibonacci sequence as a json array', (done) => {
    const testFile = '/tmp/fib.test.json'
    fibonacciToFile(testFile, sequence.length)
    fs.readFile(testFile, 'utf8', (err, data) => {
        if(err) {
            done(err)
            return;
        }
        try {
            expect(JSON.parse(data)).toEqual(sequence)
            done();
        } catch (error) {
            done(error);
        }
    })
})
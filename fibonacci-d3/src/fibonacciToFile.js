const fs = require('fs')
const fibonacci = require('./fibonacci')
const sequence = fibonacci.sequence

const fibonacciToFile = (filename, amount) => {
    fs.writeFileSync(filename, JSON.stringify(sequence(amount)))
}

module.exports = fibonacciToFile
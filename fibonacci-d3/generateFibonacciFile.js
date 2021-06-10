const fibonacciToFile = require('./src/fibonacciToFile');
const readline = require('readline')

const rl = readline.createInterface({input: process.stdin, output: process.stdout})

rl.question("How long do you want the generated fibonacci sequence to be (numeric value):", (answer) => {
    if (!Number(answer)) {
        console.log('Please enter a valid number')
        rl.close();
        return;
    }
    fibonacciToFile('./static/sequence.json', Number(answer))
    console.log('File with the fibonacci sequence generated at: ./static/sequence.json')
    rl.close();
})
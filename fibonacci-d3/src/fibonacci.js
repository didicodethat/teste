const number = (index) => {
    if(index <= 1) return index;
    return number(index-1) + number(index - 2)
}

const sequence = (amount) => Array(amount).fill().map((v, index) => number(index))

module.exports = {
    number: number,
    sequence: sequence
}
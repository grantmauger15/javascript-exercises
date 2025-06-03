const sumAll = function(numOne, numTwo) {

    if(!Number.isInteger(numOne) || !Number.isInteger(numTwo) || numOne < 0 || numTwo < 0) return "ERROR";

    const [min, max] = numOne < numTwo ? [numOne, numTwo] : [numTwo, numOne];

    sum = 0;
    for(let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

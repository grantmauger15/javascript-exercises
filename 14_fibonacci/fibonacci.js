const fibonacci = function(n) {
    if(isNaN(n) || +n < 0) return 'OOPS';
    if(+n === 0) return 0;

    let fib = [1, 1];

    for(let i = 2; i < +n; i++) {
        fib[i] = fib.at(-1) + fib.at(-2);
    }

    return fib[+n-1]

};

// Do not edit below this line
module.exports = fibonacci;

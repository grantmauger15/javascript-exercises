const palindromes = function (str) {
    alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
    newStr = str.toLowerCase().split('').filter(letter => alphanumeric.includes(letter));

    return newStr.join('') === [...newStr].reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;

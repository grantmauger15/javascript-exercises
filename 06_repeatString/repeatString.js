const repeatString = function(str, repeats) {
    repeat_str = "";

    if(repeats < 0) return "ERROR";
    for(let i = 0; i < repeats; i++) {
        repeat_str += str;
    }

    return repeat_str;
};

// Do not edit below this line
module.exports = repeatString;

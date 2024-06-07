const repeatString = function(str, num) {
    let repeat = "";
    if (num < 0) {
        return "ERROR";
    }
    else {
        for (let i=1;i<=num;i++) {
            repeat = repeat.concat(str);
        }
        return repeat;
    }    
};

// Do not edit below this line
module.exports = repeatString;

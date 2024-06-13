//We create an array of numbers following the fibonacci sequence with a length that is passed to the function

const fibonacci = function(number) {
    
    let counter;

    if (number !== 'number') {
        counter = parseInt(number);
    }
    else {
        counter = number;
    }

    if (counter === 0) {return 0};

    if (counter < 0) { return 'OOPS'};
    
    let firstNum = 1;
    let secondNum = 0;

    for (let i = 2; i <= counter; i++){
        let currentNum = firstNum + secondNum;
        secondNum = firstNum;
        firstNum = currentNum;
    };

    return firstNum;
};

// Do not edit below this line
module.exports = fibonacci;

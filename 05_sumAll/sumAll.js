const sumAll = function(numOne, numTwo) {
    let sum = 0;
    let start = 0;
    let end = 0;

    if (numOne<0||numTwo<0||(Number.isInteger(numOne)===false)||(Number.isInteger(numTwo)===false)) {
        return ("ERROR");
    }
    if (numOne>numTwo) {
        end = numOne;
        start = numTwo; 
    }
    else {
        end = numTwo;
        start = numOne;  
    }

    for (let i=start; i<=end;i++){
        sum = sum+i;
    }

    
    return sum;
};

sumAll(1, "All");

// Do not edit below this line
module.exports = sumAll;

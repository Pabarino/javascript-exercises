const reverseString = function(text) {
    let inverse = "";
    for (let i=text.length;i>=0;i--){
        inverse = inverse.concat(text.charAt(i));
        
    }
    return inverse;
};

// Do not edit below this line
module.exports = reverseString;

const removeFromArray = function(array, ...numRemove) {
    //let arrayLength=array.length;
    console.log(array);

    for (let i=0; i<array.length; i++) {
        console.log(array[i]);
        console.log(array.length + "l");
        for (let x=0; x<numRemove.length; x++){
            console.log(array[i]);
            if (array[i]===numRemove[x]) {
                array.splice(i,1);
                i--;
                console.log(array);            
            }           
        }                  
    }      
    return array;
    
};

removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line [1, 2, 3, 4], 3, 2
module.exports = removeFromArray;

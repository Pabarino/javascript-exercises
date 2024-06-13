const findTheOldest = function(array) {
    const oldestPerson = array.sort((a,b) => (a.yearOfDeath-a.yearOfBirth)>(b.yearOfDeath-b.yearOfBirth) ? -1 : 1);
    return oldestPerson[0];
};

// Do not edit below this line
module.exports = findTheOldest;

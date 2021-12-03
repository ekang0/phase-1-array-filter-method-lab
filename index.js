// Code your solution here
function findMatching(array, stringArg){
    let drivers = array.filter(element => element === stringArg || element.toUpperCase() === stringArg.toUpperCase());
    return drivers;
};

function fuzzyMatch(array, matchLetters) {
    let length = matchLetters.length;
    let match = array.filter(element => element.slice(0, length) === matchLetters);
    return match;
};

function matchName(array, name){
    const objMatchName = array.filter(element => element.name === name);
    return objMatchName;
};

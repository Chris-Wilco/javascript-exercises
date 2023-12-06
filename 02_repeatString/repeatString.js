const repeatString = function(stringToRepeat, numberOfTimes) {
    let returnString = "";
    if(numberOfTimes < 0){
        return "ERROR";
    }
    for(let i = 0; i < numberOfTimes; i++){
        returnString += stringToRepeat;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;

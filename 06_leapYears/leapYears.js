const leapYears = function(inputYear) {
    if(inputYear % 4 != 0){
        return false;
    }
    if(inputYear % 100 == 0 && inputYear % 400 != 0){
        return false;
    }
    return true;
};

// Do not edit below this line
module.exports = leapYears;

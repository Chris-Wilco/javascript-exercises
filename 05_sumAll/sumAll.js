const sumAll = function(int1, int2) {
    if(int1 < 0 || int2 < 0 || !Number.isInteger(int1) || !Number.isInteger(int2)){
        return 'ERROR';
    }
    lowInt = Math.min(int1, int2);
    highInt = Math.max(int1, int2);
    return ((highInt - lowInt) + 1) * (lowInt + highInt) / 2;
};

// Do not edit below this line
module.exports = sumAll;

const sumAll = function(start, end) {
    if(start < 0 || end < 0 || Number.isInteger(start) === false || Number.isInteger(end) === false) {
        return "ERROR";
    }

    let sum = 0;

    if(start < end) {
        for(; start <= end; start++) {
            sum += start
        }
    }
    else {
        for(; start >= end; start--) {
            sum += start
        }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;

const findTheOldest = function(arr) {
    arr.sort((a, b) => {
        if(a.yearOfDeath === undefined) {
        let currentYear = new Date().getFullYear();
        return (currentYear - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);  
        }
        else if(b.yearOfDeath === undefined) {
            let currentYear = new Date().getFullYear();
            return (a.yearOfDeath - a.yearOfBirth) - (currentYear - b.yearOfBirth);
        }
        return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
    });
    return arr[arr.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;

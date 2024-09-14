const reverseString = function(string) {
    let arr = [];
    arr = [...string];
    let reversedString = "";
    for(let i = 0; i < arr.length; i++) {
        reversedString += arr[arr.length-1-i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

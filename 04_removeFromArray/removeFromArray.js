const removeFromArray = function(array, ...removables) {
    for(let i = 0; i < removables.length; i++) {
        while(array.indexOf(removables[i]) !== -1) {
            array.splice(array.indexOf(removables[i]), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

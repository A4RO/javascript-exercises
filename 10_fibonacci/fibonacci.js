const fibonacci = function(number) {
    if(number == 0) return 0;
    if(number < 0) return "OOPS";
    let sequence = [];
    for(let i = 0; i < number; i++) {
        if(i === 0 || i === 1) {
            sequence.push(1);
        }
        else {
            sequence.push(sequence[i-2] + sequence[i-1]);
        }
    }
    return sequence[sequence.length-1];
};

// Do not edit below this line
module.exports = fibonacci;

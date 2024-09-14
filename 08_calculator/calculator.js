const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(...numbers) {
  let sum = 0;
	for(let i = 0; i < numbers[0].length; i++) {
    sum += numbers[0][i];
  }
  return sum;
};

const multiply = function(...numbers) {
  let multiplied = 1;
	for(let i = 0; i < numbers[0].length; i++) {
    multiplied *= numbers[0][i];
  }
  return multiplied;
};

const power = function(first, second) {
	return first ** second;
};

const factorial = function(number) {
	let factorial = 1;
  for(let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

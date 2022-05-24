const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let total = 0;
  for(let i = 0; i < array.length; i++){
    total += parseInt(array[i]);
  }
  return total;
};

const multiply = function(array) {
  if(array.length === 0)return 0;
	let product = 1;
  for(let i = 0; i < array.length; i++){
    product *= parseInt(array[i]);
  }
  return product;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  if(a === 0)return 1;
	let product = 1;
  for(let i = 1; i <= a; i++){
    product *= i;
  }
  return product;
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

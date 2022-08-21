const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const sum = function(array) {
    let sum = 0;
    for (let i in array) {
        sum += array[i];
    }
    return sum;
};

const multiply = function(array) {
    let result = 1;
    for (let i in array) {
        result = result * array[i];
    }
    return result;
};

const power = function(num, pow) {
    let result = 1;
    for (let i = 0; i < pow; i++) {
        result = result * num;
    }
    return result;
};

const factorial = function(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
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

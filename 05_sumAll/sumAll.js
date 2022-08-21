const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof(num1) != 'number' || typeof(num2) != 'number') {
        return "ERROR";
    } else {
        let startingNumber = 0;
        let finishinNumber = 0;
        if (num1 > num2) {
            startingNumber = num2;
            finishinNumber = num1;
        } else {
            startingNumber = num1;
            finishinNumber = num2;
        }
        let sum = 0;
        for (let i = startingNumber; i <= finishinNumber; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;

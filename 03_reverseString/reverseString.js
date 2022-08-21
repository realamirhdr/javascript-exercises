const reverseString = function(str) {
    let stringArray = []
    for (let i = str.length - 1; i >= 0; i--) {
        stringArray.push(str.charAt(i));
    }
    let result = "";
    for (let i = 0; i < stringArray.length; i++) {
        result += stringArray[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;

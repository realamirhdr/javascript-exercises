const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    str = str.replace(/\s/g, '');
    let temp = ""
    for (let i = str.length; i >= 0; i--) {
        temp += str.charAt(i);
    }
    if (str === temp) {
        return true;
    } else {
        return false;
    }
};

console.log(palindromes('A car, a man, a maraca.'));
// Do not edit below this line
module.exports = palindromes;

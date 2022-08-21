const ftoc = function(temp) {
  let result = Math.round(((temp - 32) * 5 / 9) * 10);
  return result / 10;
};

const ctof = function(temp) {
  let result =  Math.round(((temp * 9 / 5) + 32) * 10);
  return result / 10;
};

console.log(ftoc(100));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

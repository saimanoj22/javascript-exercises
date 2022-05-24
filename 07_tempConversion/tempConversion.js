const ftoc = function(temp) {
  temp = (temp - 32) * (5/9);
  return parseFloat(temp.toFixed(1));
};

const ctof = function(temp) {
  temp = (temp * (9 / 5)) + 32;
  return parseFloat(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

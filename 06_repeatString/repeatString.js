const repeatString = function (str, nr) {
  if (nr < 0) {
    return "ERROR";
  } else if (nr == 0) {
    return "";
  }
  let one = str;
  for (let i = 1; i < nr; i++) {
    str += one;
  }
  return str;
};

// Do not edit below this line
module.exports = repeatString;

const sumAll = function (nr1, nr2) {
  if (nr1 < 0 || nr2 < 0) {
    return "ERROR";
  } else if (typeof nr1 != "number" || typeof nr2 != "number") {
    return "ERROR";
  } else if (nr1 != Math.floor(nr1) || nr2 != Math.floor(nr2)) {
    return "ERROR";
  } else if (nr1 > nr2) {
    [nr1, nr2] = [nr2, nr1];
  }
  let sum = 0;
  for (let i = nr1; i <= nr2; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

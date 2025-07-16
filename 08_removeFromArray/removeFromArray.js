const removeFromArray = function () {
  const array = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    let index;
    if (array.findIndex((value, index, array) => value === arguments[i]) >= 0) {
      array.splice(
        array.findIndex((value, index, array) => value === arguments[i]),
        1
      );
      i--;
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;

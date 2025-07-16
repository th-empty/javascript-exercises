const reverseString = function (str) {
  const arr = str.split("");
  let copy = new Array();
  for (let i = arr.length - 1; i >= 0; i--) {
    copy.push(arr[i]);
  }
  return copy.join("");
};

// Do not edit below this line
module.exports = reverseString;

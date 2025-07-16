const convertToCelsius = function (nr) {
  let cel = Math.floor((((nr - 32) * 5) / 9) * 100);
  if (cel >= 0 && cel % 10 >= 5) {
    cel += 10 - (cel % 10);
  } else if (cel >= 0) {
    cel += -(cel % 10);
  } else if (cel < 0 && cel % 10 <= -5) {
    cel += 10;
    cel += 10 + (cel % 10);
  } else if (cel < 0) {
    cel += -(cel % 10);
  }
  return cel / 100;
};

const convertToFahrenheit = function (nr) {
  let far = Math.floor(((nr * 9) / 5 + 32) * 100);
  if (far >= 0 && far % 10 >= 5) {
    far += 10 - (far % 10);
  } else if (far >= 0) {
    far += -(far % 10);
  } else if (far < 0 && far % 10 <= -5) {
    far += 10;
    far += 10 + (far % 10);
  } else if (far < 0) {
    far += -(far % 10);
  }
  return far / 100;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

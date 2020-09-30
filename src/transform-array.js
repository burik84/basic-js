const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  } else {
    const newArr = [...arr];
    arr.forEach((el, index) => {
      if (el === "--discard-prev") {
        index === 0
          ? newArr.splice(index, 1)
          : newArr.splice(index - 1, 2);
      } else if (el === "--discard-next") {
        index === newArr.length - 1
          ? newArr.splice(index, 1)
          : newArr.splice(index, 2);
      } else if (el === "--double-prev") {
        index === 0
          ? newArr.splice(index, 1)
          : newArr.splice(index, 1, newArr[index - 1]);
      } else if (el === "--double-next") {
        index === newArr.length - 1
          ? newArr.splice(index, 1)
          : newArr.splice(index, 1, newArr[index + 1]);
      }
    });
    return newArr;
  }
};

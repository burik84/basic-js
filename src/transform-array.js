const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  } else {
    const newArr = [];
    let del = false;
    let indexNum;
    arr.forEach((el, index) => {
      if (el === "--discard-prev" && !del) {
        if (index !== 0) {
          newArr.pop();
        }
      } else if (el === "--discard-next") {
        del = true;
        if (index < arr.length - 1) {
          indexNum = index + 1;
        }
        if (
          arr[index + 2] == "--discard-prev" ||
          arr[index + 2] == "--double-prev"
        ) {
          indexNum = index + 2;
        }
      } else if (el === "--double-prev" && !del) {
        if (index !== 0) {
          newArr.push(arr[index - 1]);
        }
      } else if (el === "--double-next") {
        if (index < arr.length - 1) {
          newArr.push(arr[index + 1]);
        }
      } else {
        if (!del) {
          newArr.push(el);
        } else {
          if (index == indexNum) del = false;
        }
      }
    });

    return newArr;
  }
};

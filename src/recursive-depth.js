const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let counter = 1;
        counter += this.calculateDepth(arr[i]);
        if (counter > result) result = counter;
      }
    }
    return result;
  }
};

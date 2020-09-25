const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if (date instanceof Date && Object.getOwnPropertyNames(date).length === 0) {
    const month = date.getMonth();
    if (month > 1 && month < 5) {
      return 'spring';
    } else if (month > 4 && month < 8) {
      return 'summer';
    } else if (month > 7 && month < 11) {
      return 'autumn';
    } else {
      return 'winter';
    }
  } else if (!date) {
    return 'Unable to determine the time of year!';
  } else {
    throw new Error;
  }
};

const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = "";
  let newStr = str;

  if (options.addition === undefined) options.addition = "";
  if (options.additionSeparator === undefined) options.additionSeparator = "|";
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.separator === undefined) options.separator = "+";

  for (let i = 1; i <= options.repeatTimes; i++) {
    result += newStr;
    for (let j = 1; j <= options.additionRepeatTimes; j++) {
      result += options.addition;
      if (j < options.additionRepeatTimes) result += options.additionSeparator;
    }
    if (i < options.repeatTimes) result += options.separator;
  }
  return result;
};

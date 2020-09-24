const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof (sampleActivity)!=='string'||sampleActivity<=0||sampleActivity>MODERN_ACTIVITY||/[a-zA-Z]/.test(sampleActivity)){
    return false
  }else{
    sampleActivity=parseFloat(sampleActivity);
    const age=Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD);
    return Math.ceil(age);
  }
};

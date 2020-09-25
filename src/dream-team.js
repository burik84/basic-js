const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let nameArray=[];
  if (!Array.isArray(members)) {
    return false;
  }else{
    for (name in members) {
      if (typeof members[name] === 'string') {
        nameArray.push(/[a-zA-Z]/g.exec(members[name]));
      }
    }
  }

  const result=nameArray.join('').toUpperCase().split('').sort().join('');

  return result;
};

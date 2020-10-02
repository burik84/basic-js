const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain:[],

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    value===undefined?this.chain.push('( )'):this.chain.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if (this.chain[position-1]) {
      this.chain.splice(position-1,1)
      return this;
    }else{
      this.chain=[];
      throw Error
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result=this.chain.join('~~');
    this.chain=[];
    return result;
  }
};

module.exports = chainMaker;

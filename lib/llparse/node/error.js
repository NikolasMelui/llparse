'use strict';

const llparse = require('./');

class Error extends llparse.Node {
  constructor(code, reason) {
    super('error');

    this.code = code;
    this.reason = reason;

    this.noAdvance = true;
  }
}
module.exports = Error;
const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let decision = "";
  let register = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      register++;
    } else {
      if (register === 1) {
        decision += str[i];
      } else {
        decision += register + str[i];
        register = 1;
      }
    }
  }

  return decision;
}

module.exports = {
  encodeLine,
};

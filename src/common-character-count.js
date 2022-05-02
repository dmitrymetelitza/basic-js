const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let Array1 = s1.split("");
  let Array2 = s2.split("");
  let one;
  let two;
  let summ = 0;

  if (Array1.length > Array2.length) {
    one = Array1;
    two = Array2;
  } else {
    one = Array2;
    two = Array1;
  }

  one.forEach((item) => {
    if (two.includes(item)) {
      const index = two.indexOf(item);
      two.splice(index, 1);
      summ++;
    }
  });

  return summ;
}

module.exports = {
  getCommonCharacterCount,
};

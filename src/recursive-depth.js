const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let register = 1;

    for (let elem of arr) {
      let registerDepth = 1;

      if (Array.isArray(elem)) {
        registerDepth += this.calculateDepth(elem);
      }

      if (registerDepth > register) {
        register = registerDepth;
      }
    }

    return register;
  }
}

module.exports = {
  DepthCalculator,
};

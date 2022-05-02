const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  const subArrLength = matrix[0].length;
  const flatMat = matrix.flat(1);
  const result = flatMat.reduce(
    (acc, el, index, arr) =>
      arr[index - subArrLength] === 0 ? acc : (acc += el),
    0
  );
  return result;
}

module.exports = {
  getMatrixElementsSum,
};

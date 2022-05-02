const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  const arrayParts = domains.map((el) =>
    el
      .split(".")
      .reverse()
      .map((word) => `.${word}`)
  );

  arrayParts.forEach((el) => {
    for (let i = 0; i < el.length; i++) {
      if (i === 0) {
        if (!result.hasOwnProperty(el[i])) {
          result[el[i]] = 1;
        } else {
          result[el[i]]++;
        }
      } else {
        let Index = el.indexOf(el[i]);
        let actual = "";

        for (let k = 0; k <= Index; k++) {
          actual += el[k];
        }

        if (!result.hasOwnProperty(actual)) {
          result[actual] = 1;
        } else {
          result[actual]++;
        }
      }
    }
  });

  return result;
}

module.exports = {
  getDNSStats,
};

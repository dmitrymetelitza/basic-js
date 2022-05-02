const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (Object.prototype.toString.call(date.getMonth) !== "[object Function]")
    throw new Error("Invalid date!");

  try {
    isNaN(date);
  } catch (err) {
    throw new Error("Invalid date!");
  }

  const Month = date.getMonth() + 1;
  if (Month === 12 || Month < 3) return "winter";
  if (Month < 6) return "spring";
  if (Month < 9) return "summer";
  return "autumn";
}

module.exports = {
  getSeason,
};

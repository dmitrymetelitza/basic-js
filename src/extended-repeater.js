const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const versionsArr = [];

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    versionsArr.push(String(options.addition));
  }

  const versionsStr = versionsArr.join(options.additionSeparator || "|");

  if (versionsStr.length !== 0) {
    versionsArr.length = 0;

    for (let j = 0; j < options.repeatTimes; j++) {
      versionsArr.push(String(str) + versionsStr);
    }
  } else {
    if (!options.repeatTimes) {
      versionsArr.push(String(str) + String(options.addition));
    } else {
      for (let j = 0; j < options.repeatTimes; j++) {
        !options.addition
          ? versionsArr.push(String(str))
          : versionsArr.push(String(str) + String(options.addition));
      }
    }
  }

  return versionsArr.join(options.separator || "+");
}

module.exports = {
  repeater,
};

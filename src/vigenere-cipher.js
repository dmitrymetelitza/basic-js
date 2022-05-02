const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }

  encrypt(message, key, direct = true) {
    if (!message || !key) throw new Error(`Incorrect arguments!`);

    const ALPHABET_SIZE = 26;
    const FIRST_LETTER_UNICODE = 65;
    const LAST_LETTER_UNICODE = 90;

    function toCode(word) {
      const wordToArr = word.toUpperCase().split("");
      return wordToArr.map((symbol) =>
        symbol.charCodeAt(0) >= FIRST_LETTER_UNICODE &&
        symbol.charCodeAt(0) <= LAST_LETTER_UNICODE
          ? symbol.charCodeAt(0)
          : symbol
      );
    }

    const messageCode = toCode(message);
    let keyCode = toCode(key);

    const result = [];
    let counter = 0;

    for (let char of messageCode) {
      if (typeof char !== "number") {
        result.push(char);
      } else {
        const keyCodeChar = keyCode[counter++ % keyCode.length];
        let displacement;
        if (direct) {
          displacement = (char + keyCodeChar) % ALPHABET_SIZE;
        } else {
          char - keyCodeChar >= 0
            ? (displacement = char - keyCodeChar)
            : (displacement = ALPHABET_SIZE + (char - keyCodeChar));
        }
        result.push(String.fromCharCode(FIRST_LETTER_UNICODE + displacement));
      }
    }

    return (this.direction ? result : result.reverse()).join("");
  }

  decrypt(message, key) {
    return this.encrypt(message, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine,
};

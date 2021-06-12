/**
 * It recieves a Roman number (as string)
 * and converts it to it's Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */

module.exports = function romanToDec(roman) {
  if (typeof roman !== "string") {
    throw new Error(`${roman} is not a string!`);
  }
  let result = 0;
  let numbers = roman
    .toUpperCase()
    .split("")
    .map((char) => {
      if (char === "I") return 1;
      if (char === "V") return 5;
      if (char === "X") return 10;
      if (char === "L") return 50;
      if (char === "C") return 100;
      if (char === "D") return 500;
      if (char === "M") return 1000;
      throw new Error(`${char} is not a valid roman numeral!`);
    });

  for (let i = 0; i < numbers.length; i++) {
    let num1 = numbers[i];
    if (i + 1 !== numbers.length) {
      let num2 = numbers[i + 1];
      if (num1 < num2) {
        result += num2 - num1;
        i++;
      } else {
        result += num1;
      }
    } else {
      result += num1;
    }
  }
  return result;
};

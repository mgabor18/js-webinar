/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */

module.exports = function arraySum(elements) {
  let result = 0;
  if (elements.length === 0 || !Array.isArray(elements)) {
    return result;
  }
  for (let el of elements) {
    if (typeof el === "number") {
      result += el;
    } else if (Array.isArray(el)) {
      result += arraySum(el);
    }
  }
  return result;
};

/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */

module.exports = function longestString(strings) {
  if (!Array.isArray(strings) || !strings.length) {
    return "";
  }
  let strs = strings
    .map((item) => (typeof item === "string" ? item : ""))
    .filter((word) => word !== "")
    .sort();
  return strs.length ? strs[0] : "";
};

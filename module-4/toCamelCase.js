/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */
const ALLOWED_CHARACTERS = "abcdefghijklmnopqrstuvwxyz0123456789";
module.exports = function toCamelCase(str) {
  if (typeof str !== "string") {
    return "";
  }
  return str
    .replace(/\s/g, " ")
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .filter((c) => {
          return ALLOWED_CHARACTERS.includes(c.toLowerCase());
        })
        .join("");
    })
    .filter((word) => {
      return word !== "";
    })
    .map((word, i) => {
      if (i === 0) {
        return word.toLowerCase();
      }
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
};

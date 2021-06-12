/**
 * It determines, whether the given array is sorted in
 * alphabetically ascending order.
 *
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 *
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */

module.exports = function arraySorted(items, ignore) {
  let cleanItems = items.map((item) => {
    return item.toString().replace(/\s/g, "").toLowerCase();
  });
  if (ignore) {
    cleanItems = cleanItems.map((item) => {
      return item
        .split("")
        .filter((char) => {
          return !ignore.includes(char);
        })
        .join("");
    });
  }
  let sortedCleanItems = [...cleanItems].sort();
  for (let i = 0; i < cleanItems.length; i++) {
    if (cleanItems[i] !== sortedCleanItems[i]) {
      return false;
    }
  }

  return true;
};

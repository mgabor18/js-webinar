/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 *
 * It prints out a message in case of any
 * difference in any array, using console.warn!
 *
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */

module.exports = function arrayEqual(first, second) {
  if (!Array.isArray(first) && !Array.isArray(second)) {
    return false;
  }
  if (first.length !== second.length) {
    console.warn(
      `The length of the 2 arrays are not equal! first length: ${first.length} and second length: ${second.length}!`
    );
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (Array.isArray(first[i]) || Array.isArray(second[i])) {
      if (!arrayEqual(first[i], second[i])) {
        console.warn(`${first[i]} is not equal to ${second[i]}`);
        return false;
      }
    } else if (first[i] !== second[i]) {
      console.warn(`${first[i]} is not equal to ${second[i]}`);
      return false;
    }
  }
  return true;
};

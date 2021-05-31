/**
 * It reverses the given object, i.e. return a copy of the object
 * where the keys have become the values and the values the keys
 *
 * @param {object} o the object
 * @returns {object} the new object
 */

module.exports = function reverse(o) {
  if (typeof o !== "object") {
    throw new Error("First parameter must be an object.");
  }
  let object = {};
  for (let keys in o) {
    object[o[keys]] = keys;
  }
  return object;
};

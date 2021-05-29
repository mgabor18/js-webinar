/**
 * It reverses the given object, i.e. return a copy of the object
 * where the keys have become the values and the values the keys
 *
 * @param {object} o the object
 * @returns {object} the new object
 */

function switchPropAndKey(o) {
  let object = {};
  let tmp;
  let keys = Object.keys(o);
  let values = Object.values(o);
  for (let i = 0; i < keys.length; i++) {
    tmp = keys[i];
    keys[i] = values[i];
    values[i] = tmp;

    object[keys[i]] = values[i];
  }
  return object;
}

/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait if over
 *                    or rejects if parameter is not correct
 */

module.exports = async function sleep(sec) {
  return new Promise((resolve, reject) => {
    if (isNaN(sec)) {
      reject(new Error("Sec parameter must be a number"));
    }
    setTimeout(resolve, Math.min(sec * 1000, 10000));
  });
};

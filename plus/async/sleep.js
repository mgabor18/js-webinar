/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait if over
 *                    or rejects if parameter is not correct
 */

module.exports = async function sleep(sec) {
  if (isNaN(sec)) {
    throw new Error("Sec parameter must be a number", sec);
  }
  const defaultWait = 10000;
  let wait = sec * 1000;

  if (wait < defaultWait) {
    return new Promise((resolve) => {
      setTimeout(resolve, wait);
    });
  }
  return new Promise((reject) => {
    setTimeout(reject, defaultWait);
  });
};

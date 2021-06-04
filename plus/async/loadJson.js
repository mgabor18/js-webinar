/*
 * Rewrite the following code to use async/await
 */
/*module.exports = function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        });
};

*/

module.exports = async function loadJson(url) {
  const response = await fetch(url);
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(`${response.statusText} ${response.status}`);
  }
};

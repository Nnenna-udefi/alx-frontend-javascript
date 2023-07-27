function getResponseFromAPI() {
  // create and return a promise
  return new Promise((resolve, reject) => {
    /* eslint-disable */
    setTimeout(() => {
      const responseData = { message: 'Hello there' };
      const errorMessage = 'Oops! There was an error.';
      if (true) {
        resolve(responseData);
      } else {
        reject(errorMessage);
      }
    }, 2000);
    /* eslint-disable */
  });
}
export default getResponseFromAPI;

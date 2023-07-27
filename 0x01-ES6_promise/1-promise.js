function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const promise0bject = {
        status: 200,
        body: 'Success',
      };
      resolve(promise0bject);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
export default getFullResponseFromAPI;

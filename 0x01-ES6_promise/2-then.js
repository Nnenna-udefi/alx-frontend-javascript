function handleResponseFromAPI(promise) {
  return promise.then(() => {
    // When the Promise resolves
    console.log('Got a response from the API');
    const promiseObject = {
      status: 200,
      body: 'success',
    };
    return (promiseObject);
  })
    .catch((error) => {
      console.error('Error:', error);
      return new Error(); // empty error object
    });
}

export default handleResponseFromAPI;

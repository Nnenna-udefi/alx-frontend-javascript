const weakMap = new WeakMap();

export { weakMap };

export const queryAPI = (endpoint) => {
  let queryCount = weakMap.get(endpoint) || 0;
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Increment the query count for the endpoint in the weakMap
  queryCount += 1;
  weakMap.set(endpoint, queryCount);
};

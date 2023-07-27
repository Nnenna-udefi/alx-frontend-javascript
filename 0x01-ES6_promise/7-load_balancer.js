function loadBalancer(chinaDownload, USDownload) {
  // The Promise.race() takes an iterable of promises as input and returns a single Promise
  return Promise.race([chinaDownload, USDownload]);
}

export default loadBalancer;

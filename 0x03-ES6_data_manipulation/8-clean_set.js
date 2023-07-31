const cleanSet = (set, startString) => {

  if (startString === '' || typeof startString !== 'string') return '';

  const cleanedSet = [];
  set.forEach((str) => {
    if (typeof str === 'string' && str.startsWith(startString)) {
      cleanedSet.push(str.slice(startString.length));
    }
  });
  return cleanedSet.join('-');
};

export default cleanSet;

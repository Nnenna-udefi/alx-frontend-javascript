const createInt8TypedArray = (length, position, value) => {
  // Create a new ArrayBuffer with the specified length
  const typedArray = new ArrayBuffer(length);

  // Create an Int8Array view of the ArrayBuffer
  const int8array = new Int8Array(typedArray);

  // Check if the position is within the valid range
  if (position < 0 || position >= int8array.length) {
    throw new Error('Position outside range');
  }

  // Set the value at the specified position
  int8array[position] = value;
  return new DataView(typedArray);
};

export default createInt8TypedArray;

export const functionLength = (array1) => {
  let length = 0;
  for (let i of array1) {
    length++;
  }

  length--;

  return length;
};

export const functionPush = (array1) => {
  const arraylength = functionLength(array1);

  array1[arraylength + 1] = 50;
  const newArrayLength = functionLength(array1);

  return newArrayLength;
};

export const functionPop = (array1) => {
  const arraylength = functionLength(array1);
  const deletedElement = array1[arraylength];
  delete array1[arraylength];

  return deletedElement;
};

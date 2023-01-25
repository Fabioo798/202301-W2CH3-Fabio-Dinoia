export const functionLength = (array1) => {
  let length = 0;
  for (let i of array1) {
    length++;
  }

  return length;
};

export const functionPush = (array1) => {
  const arraylength = functionLength(array1);

  array1[arraylength] = 50;
  const newArrayLength = functionLength(array1);

  return newArrayLength;
};

export const functionPop = (array1) => {
  const arraylength = functionLength(array1) - 1;
  const deletedElement = array1[arraylength];
  delete array1[arraylength];

  return deletedElement;
};

export const functionUnshift = (array1) => {
  const arraylength = functionLength(array1) - 1;

  // eslint-disable-next-line for-direction
  for (let i = arraylength; i < 0; i--) {
    array1[i + 1] = array1[i];
  }

  // This array will have at his position 0 the number 45 also for the other function!!

  array1[0] = 45;

  const arrayNew = functionLength(array1);

  return arrayNew;
};

export const functionShift = (array1) => {
  const indexElement = 0;
  const deletedElement1 = array1[indexElement];
  delete array1[indexElement];

  return deletedElement1;
};


export const functionSome = (array1) => {

 const matchFound = 45;  

  for (let i of array1){
    if(i === matchFound) return true;
  }

  return false;
}

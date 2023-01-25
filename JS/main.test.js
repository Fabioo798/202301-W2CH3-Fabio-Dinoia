import { functionLength, functionPop, functionPush, functionShift, functionSome, functionUnshift} from './main';
import { array1 } from './arrayprop';

describe("given an array", () => {
  describe("create a function that", () => {
    test("find his length", () => {
      const r = functionLength(array1);
      expect(r).toBe(4);
    });
  });
});

describe("given an array", () => {
  describe("create a function that", () => {
    test("add an element and display the new length of the original function", () => {
      const r = functionPush(array1);
      expect(r).toBe(5);
    });
  });
});

describe("given an array", () => {
  describe("create a function that", () => {
    test("delete his last element and displays it", () => {
      const r = functionPop(array1);
      expect(r).toBe(50);
    });
  });
});

describe("given an array", () => {
  describe("create a function that", () => {
    test("add one or more element to the beginning of the array and display his new length", () => {
      const r = functionUnshift(array1);
      expect(r).toBe(5);
    });
  });
});

describe("given an array", () => {
  describe("create a function that", () => {
    test("remove the first element of the array and displays this element", () => {
      const r = functionShift(array1);
      expect(r).toBe(45);
    });
  });
});

describe("given an array", () => {
  describe("create a function that", () => {
    test("check in the array for a specific element and return true in case its found", () => {
      const r = functionSome(array1);
      expect(r).toBe(false);
    });
  });
});


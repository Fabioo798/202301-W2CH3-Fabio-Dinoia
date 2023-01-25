import { functionLength, functionPop, functionPush} from './main';
import { array1 } from './arrayprop';

describe("given an array", () => {
  describe("create a function that", () => {
    test("find his length", () => {
      const r = functionLength(array1);
      expect(r).toBe(3);
    });
  });
});

describe("given an array", () => {
  describe("create a function that", () => {
    test("add an element and display the new length of the original function", () => {
      const r = functionPush(array1);
      expect(r).toBe(4);
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
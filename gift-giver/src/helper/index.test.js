import { max_number } from "./index";

describe("max_number", () => {
  describe("given an array empty array", () => {
    it("returns 0", () => {
      expect(max_number([])).toEqual(0);
    });
  });

  describe("an array of numbers", () => {
    it("it returns the max_number", () => {
      expect(max_number([1, 2, 3])).toEqual(3);
    });
  });
});

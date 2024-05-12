const { transformToNumber } = require("./numbers");

describe("transformToNumber()", () => {
  it("should return number", () => {
    const input = transformToNumber("1");
    const expectedResult = +input;

    expect(input).toBe(expectedResult);
  });
  it("should return NaN if value is not transformable to number", () => {
    const input = transformToNumber("s");

    expect(input).toBeNaN();
  });
  it("should return NaN if passed multiple values", () => {
    const input = transformToNumber("s", "3", "4");

    expect(input).toBeNaN();
  });
  it("should return NaN if passed array of values", () => {
    const input = transformToNumber(["s", "3", "4"]);

    expect(input).toBeNaN();
  });
  it("should return NaN if no values are passed", () => {
    const input = transformToNumber();

    expect(input).toBeNaN();
  });
});

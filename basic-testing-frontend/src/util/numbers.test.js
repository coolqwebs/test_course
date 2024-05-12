import { cleanNumbers, transformToNumber } from "./numbers";

describe.concurrent("transformToNumber() ", () => {
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

describe.concurrent("cleanNumbers()", () => {
  it("should return an array of numbers if an array string number values is passed", () => {
    const numberValues = ["1", "2", "3"];

    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers[0]).toBeTypeOf("number");
  });

  it("should throw an error if an array with at least one empty string is passed", () => {
    const numberValues = ["1", "2", "", "4"];

    const cleanedNumbersFn = () => cleanNumbers(numberValues);

    expect(cleanedNumbersFn).toThrow();
  });
});

const { add } = require("./math");

describe("math utils", () => {
  it("1+1 should be 2", () => {
    expect(1 + 1).toBe(2);
  });

  it("should summarize all numbers in an array", () => {
    // Arrange phase
    const numbers = [1, 2, 3];
    const expectedResult = numbers.reduce((sum, num) => (sum += num), 0);
    // Act phase
    const result = add(numbers);
    // Assert phase
    expect(result).toBe(expectedResult);
  });

  // to check if function yields NaN for invalid number values
  // to check if function yields correct results for stringified  number values

  it("should yield 0 if empty array is provided ", () => {
    const numbers = [];

    const result = add(numbers);

    expect(result).toBe(0);
  });

  it("should throw an error if no values are provided", () => {
    const resultFn = () => {
      add();
    };

    expect(resultFn).toThrow(Error);
  });

  it("should throw an error if multiple values are provided instead of an array", () => {
    const num1 = 1;
    const num2 = 2;
    const resultFn = () => {
      add(num1, num2);
    };

    expect(resultFn).toThrow(/is not iterable/);
  });
});

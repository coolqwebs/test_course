import { validateNotEmpty } from "./validation";

describe("validateNotEmpty()", () => {
  it("should throw an error, if an empty string is provided", () => {
    const testText = "";

    const validationFn = () => validateNotEmpty(testText);

    expect(validationFn).toThrow();
  });

  it("should throw an error, if blank string is provided", () => {
    const testText = "  ";

    const validationFn = () => validateNotEmpty(testText);

    expect(validationFn).toThrow();
  });

  it("should throw an error with the provided error message", () => {
    const testText = "";
    const testErrorMessage = "must not be empty";

    const validationFn = () => validateNotEmpty(testText, testErrorMessage);

    expect(validationFn).toThrow(testErrorMessage);
  });
});

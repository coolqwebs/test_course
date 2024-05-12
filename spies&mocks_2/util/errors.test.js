import { HttpError, ValidationError } from "./errors";

describe("class HttpError", () => {
  it("should contain provided statusCode, message and data", () => {
    const testStatusCode = 404;
    const testMessage = "Not found";
    const testData = {
      test: "test",
    };

    const testError = new HttpError(testStatusCode, testMessage, testData);

    expect(testError).toHaveProperty("statusCode", testStatusCode);
    expect(testError).toHaveProperty("message", testMessage);
    expect(testError).toHaveProperty("data", testData);
  });

  it("should contain undefined as data, if no data is provided", () => {
    const testStatusCode = 404;
    const testMessage = "Not found";

    const testError = new HttpError(testStatusCode, testMessage);

    expect(testError).toHaveProperty("statusCode", testStatusCode);
    expect(testError).toHaveProperty("message", testMessage);
    expect(testError.data).toBeUndefined();
  });
});

describe("class ValidatonError", () => {
  it("should contain provided message", () => {
    const testMessage = "Test error message";

    const testValidatonError = new ValidationError(testMessage);

    expect(testValidatonError).toHaveProperty("message", testMessage);
  });
});

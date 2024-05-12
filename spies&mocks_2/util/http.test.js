import { HttpError } from "./errors";
import { sendDataRequest } from "./http";

const testResponseData = { id: 1 };
const testData = { key: "test" };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      return reject("Not a string");
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((res, rej) => {
          res(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});
vi.stubGlobal("fetch", testFetch);

describe("sendDataRequest()", () => {
  it("should return the response data", () => {
    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
  });

  it("should convert the provided data to JSON", async () => {
    let errorMessage;
    try {
      await expect(sendDataRequest(testData));
    } catch (error) {
      errorMessage = error;
    }
    expect(errorMessage).not.toBe("Not a string");
  });

  it("should throw an HttpError instance if the response is not ok", async () => {
    testFetch.mockImplementationOnce((url, options) => {
      return new Promise((resolve, reject) => {
        if (typeof options.body !== "string") {
          return reject("Not a string");
        }
        const testResponse = {
          ok: false,
          json() {
            return new Promise((res, rej) => {
              res(testResponseData);
            });
          },
        };
        resolve(testResponse);
      });
    });

    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
  });
});

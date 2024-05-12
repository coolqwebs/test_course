import writeData from "./io";
import { promises as fs } from "fs";

vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join(...args) {
        return args[args.length - 1];
      },
    },
  };
});

describe("writeData()", () => {
  it("should execute the writeFile function", () => {
    const testData = "Test123";
    const testFileName = "test.txt";

    writeData(testData, testFileName);
    expect(fs.writeFile).toBeCalledWith(testFileName, testData);
  });

  it("should return a promise witn no value if called correcltly", () => {
    const testData = "Test123";
    const testFileName = "test.txt";

    writeData(testData, testFileName);
    expect(writeData(testData, testFileName)).resolves.toBeUndefined();
  });
});

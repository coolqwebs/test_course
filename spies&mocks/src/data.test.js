import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should execute provided logFn function", () => {
    const logger = vi.fn();

    logger.mockImplementationOnce(() => {});
    generateReportData(logger);

    expect(logger).toBeCalled();
  });
});

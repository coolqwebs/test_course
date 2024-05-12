import { extractPostData } from "./posts";

describe("extractPostData()", () => {
  it("should extract title and content from provided data", () => {
    const testTitle = "test title";
    const testContent = "test content";
    const testFormData = {
      title: testTitle,
      content: testContent,
      get(key) {
        return this[key];
      },
    };

    const testData = extractPostData(testFormData);

    expect(testData).toHaveProperty("title", testTitle);
    expect(testData).toHaveProperty("content", testContent);
  });
});

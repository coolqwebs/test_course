import fs from "node:fs";
import path from "node:path";
import { Window } from "happy-dom";
import { showError } from "./dom";
import { beforeEach } from "vitest";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlContent = fs.readFileSync(htmlDocPath, "utf-8").toString();

const window = new Window();
const document = window.document;
document.write(htmlContent);
vi.stubGlobal("document", document);

describe("showError()", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    document.write(htmlContent);
  });
  it("should add error paragraph to the errors container with id 'errors'", () => {
    showError("Error message");

    const errorContainer = document.getElementById("errors");
    const errorParagraph = errorContainer.querySelector("p");

    expect(errorParagraph).not.toBeNull();
  });

  it("should not contain error paragraph initially", () => {
    const errorContainer = document.getElementById("errors");
    const errorParagraph = errorContainer.querySelector("p");

    expect(errorParagraph).toBeNull();
  });

  it("should output provided error message in the paragraph", () => {
    const testErrorMessage = "Error message";
    showError(testErrorMessage);

    const errorContainer = document.getElementById("errors");
    const errorParagraph = errorContainer.querySelector("p");

    expect(errorParagraph.textContent).toBe(testErrorMessage);
  });
});

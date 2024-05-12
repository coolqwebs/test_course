/**
 * Generates a result text based on the given result.
 *
 * @param {string} result - The result to generate the text for.
 * @return {string} The generated result text.
 */
export function generateResultText(result) {
  if (result === "invalid") {
    return "Invalid input. You must enter valid numbers.";
  } else if (result !== "no-calc") {
    return "Result: " + result;
  }
  return "";
}

/**
 * Updates the text content of the element with id "result" to display the provided resultText.
 *
 * @param {string} resultText - The text to be displayed as the result.
 * @return {void}
 */
export function outputResult(resultText) {
  const output = document.getElementById("result");
  output.textContent = resultText;
}

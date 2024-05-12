/**
 * Extracts the values of the "num1" and "num2" fields from the given form data.
 *
 * @param {FormData} formData - The form data containing the fields.
 * @return {Array} An array containing the values of the "num1" and "num2" fields.
 */
export function extractNumbers(formData) {
  const num1Input = formData.get("num1");
  const num2Input = formData.get("num2");

  return [num1Input, num2Input];
}

/**
 * Extracts the values of the entered numbers from the given form.
 *
 * @param {HTMLFormElement} form - The form element containing the number inputs.
 * @return {Array} An array containing the values of the entered number inputs.
 */
export function extractEnteredNumbersValues(form) {
  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);
  return numberInputs;
}

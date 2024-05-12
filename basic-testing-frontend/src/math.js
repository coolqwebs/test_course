import { cleanNumbers } from "./util/numbers";

/**
 * Function to calculate the sum of numbers in an array.
 *
 * @param {Array} numbers - An array of numbers to be summed.
 * @return {number} The total sum of the numbers in the array.
 */
export function add(numbers) {
  if (Array.isArray(numbers) && numbers.length === 0) {
    return 0;
  }
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

/**
 * Calculates the result based on an array of number values, handling exceptions.
 *
 * @param {Array} numberValues - An array of number values to calculate the result.
 * @return {string} The calculated result as a string or an error message.
 */
export function calculateResult(numberValues) {
  try {
    const numbers = cleanNumbers(numberValues);

    return add(numbers).toString();
  } catch (error) {
    return error.message;
  }
}

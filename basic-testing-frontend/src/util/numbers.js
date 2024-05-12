import { validateNumber, validateStringNotEmpty } from "./validation";

/**
 * Transforms a value to a number by using the unary plus operator.
 *
 * @param {any} value - The value to transform into a number.
 * @return {number} The transformed number.
 */
export function transformToNumber(value) {
  return +value;
}

/**
 * Cleans an array of number values by validating each input, transforming it to a number, and returning in a new array.
 *
 * @param {Array} numberValues - The array of number values to be cleaned.
 * @return {Array} The new array of cleaned number values.
 */
export function cleanNumbers(numberValues) {
  return numberValues.map((numberInput) => {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    return number;
  });
}

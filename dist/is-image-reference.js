import isReference from './is-reference.js';
/**
 * Type guard that checks if a value is an {@link ImageReference} value.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is an {@link ImageReference} value.
 *
 * @example
 * ```ts
 * const value = { type: 'imageReference', referenceType: 'full', identifier: 'foo' };
 * isImageReference(value); //=> true, value is ImageReference
 * ```
 */
export default ((value) => isReference(value) && value.type === 'imageReference');

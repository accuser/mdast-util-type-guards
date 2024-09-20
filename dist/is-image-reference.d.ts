import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { ImageReference } from 'mdast';
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
declare const _default: TypeGuard<ImageReference>;
export default _default;

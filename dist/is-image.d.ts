import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Image } from 'mdast';
/**
 * Type guard that checks if a value is an {@link Image} value.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is an {@link Image} value.
 *
 * @example
 * ```ts
 * const value = { type: 'image', url: 'http://example.com/image.jpg' };
 * isImage(value); //=> true, value is Image
 * ```
 */
declare const _default: TypeGuard<Image>;
export default _default;

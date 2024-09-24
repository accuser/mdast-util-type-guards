import { isNulliparous } from '@accuser/unist-util-type-guards';
/**
 * Type guard that checks if a value is a {@link Parent} node without any child elements.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Parent} node without any child elements.
 * @see {@link https://github.com/syntax-tree/mdast#parent} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'paragraph', children: [] };
 * isNulliparous(node); //=> true, node is Parent
 * ```
 */
export default isNulliparous;

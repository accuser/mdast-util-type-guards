import { type TypeGuard } from '@accuser/unist-util-type-guards';
import { Parent } from 'mdast';
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
declare const _default: TypeGuard<Parent>;
export default _default;

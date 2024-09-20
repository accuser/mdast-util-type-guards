import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Blockquote } from 'mdast';
/**
 * Type guard that checks if a value is a {@link Blockquote} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Blockquote} node.
 *
 * @example
 * ```ts
 * const node = { type: 'blockquote', children: [] };
 * isBlockquote(node); //=> true, node is Blockquote
 * ```
 */
declare const _default: TypeGuard<Blockquote>;
export default _default;

import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Root } from 'mdast';
/**
 * Type guard that checks if a value is a {@link Root} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Root} node.
 *
 * @example
 * ```ts
 * const node = { type: 'root', children: [] };
 * isRoot(node); //=> true, node is Root
 * ```
 */
declare const _default: TypeGuard<Root>;
export default _default;

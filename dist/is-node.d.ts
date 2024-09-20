import { type TypeGuard } from '@accuser/unist-util-type-guards';
import { Node } from 'mdast';
/**
 * Type guard that checks if a value is a {@link Node} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} node.
 * @see {@link https://github.com/syntax-tree/mdast#node} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'blockquote', children: [] };
 * isNode(node); //=> true, node is Node
 * ```
 */
declare const _default: TypeGuard<Node>;
export default _default;

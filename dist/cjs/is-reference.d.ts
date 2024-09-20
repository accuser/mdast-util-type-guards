import { TypeGuard } from '@accuser/unist-util-type-guards';
import { Node, Reference } from 'mdast';
/**
 * Type guard that checks if a value is a {@link Node} that implements the {@link Reference} interface.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that implements the {@link Reference} interface.
 * @see {@link https://github.com/syntax-tree/mdast#reference} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'definition', identifier: 'foo', referenceType: 'full', url: 'https://example.com' };
 * isReference(node); //=> true, node is Node & Reference
 * ```
 */
declare const _default: TypeGuard<Node & Reference>;
export default _default;

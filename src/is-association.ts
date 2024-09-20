import { TypeGuard } from '@accuser/unist-util-type-guards';
import { Association, Node } from 'mdast';
import isNode from './is-node.js';

/**
 * Type guard that checks if a value is a {@link Node} that implements the {@link Association} interface.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that implements the {@link Association} interface.
 * @see {@link https://github.com/syntax-tree/mdast#association} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'definition', identifier: 'foo', url: 'https://example.com' };
 * isAssociation(node); //=> true, node is Node & Association
 * ```
 */
export default ((value) =>
	isNode(value) && 'identifier' in value && typeof value.identifier === 'string') as TypeGuard<
	Node & Association
>;

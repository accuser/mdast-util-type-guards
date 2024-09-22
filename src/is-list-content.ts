import { TypeGuard } from '@accuser/unist-util-type-guards';
import { ListContent } from 'mdast';
import isNode from './is-node.js';

const listContentTypes = new Set(['listItem']);

/**
 * Type guard that checks if a value is a {@link Node} that is {@link ListContent}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that is {@link ListContent}.
 *
 * @example
 * ```ts
 * const node = { type: 'listItem', children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, world!' }] }] };
 * isListContent(node); //=> true, node is ListContent
 * ```
 */
export default ((value) =>
	isNode(value) && listContentTypes.has(value.type)) as TypeGuard<ListContent>;

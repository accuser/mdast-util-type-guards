import { TypeGuard } from '@accuser/unist-util-type-guards';
import { TableContent } from 'mdast';
import isNode from './is-node.js';

const tableContentTypes = new Set(['tableRow']);

/**
 * Type guard that checks if a value is a {@link Node} that is {@link TableContent}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that is {@link TableContent}.
 *
 * @example
 * ```ts
 * const node = { type: 'tableRow', children: [{ type: 'tableCell', children: [{ type: 'text', value: 'Hello, world!' }] }] };
 * isTableContent(node); //=> true, node is TableContent
 * ```
 */
export default ((value) =>
	isNode(value) && tableContentTypes.has(value.type)) as TypeGuard<TableContent>;

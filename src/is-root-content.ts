import { TypeGuard } from '@accuser/unist-util-type-guards';
import { RootContent } from 'mdast';
import isNode from './is-node.js';

const rootContentTypes = new Set([
	'break',
	'code',
	'definition',
	'delete',
	'emphasis',
	'footnoteDefinition',
	'footnoteReference',
	'heading',
	'html',
	'image',
	'imageReference',
	'inlineCode',
	'link',
	'linkReference',
	'list',
	'listItem',
	'paragraph',
	'strong',
	'table',
	'tableCell',
	'tableRow',
	'text',
	'thematicBreak',
	'yaml'
]);

/**
 * Type guard that checks if a value is a {@link Node} that is {@link RootContent}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that is {@link RootContent}.
 *
 * @example
 * ```ts
 * const node = { type: 'paragraph', children: [{ type: 'text', value: 'Hello, world!' }] };
 * isRootContent(node); //=> true, node is RootContent
 * ```
 */
export default ((value) =>
	isNode(value) && rootContentTypes.has(value.type)) as TypeGuard<RootContent>;

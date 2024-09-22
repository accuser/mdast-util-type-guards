import isNode from './is-node.js';
const blockContentTypes = new Set([
    'blockquote',
    'code',
    'heading',
    'html',
    'list',
    'paragraph',
    'table',
    'thematicBreak'
]);
/**
 * Type guard that checks if a value is a {@link Node} that is {@link BlockContent}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that is {@link BlockContent}.
 *
 * @example
 * ```ts
 * const node = { type: 'paragraph', children: [{ type: 'text', value: 'Hello, world!' }] };
 * isBlockContent(node); //=> true, node is BlockContent
 * ```
 */
export default ((value) => isNode(value) && blockContentTypes.has(value.type));

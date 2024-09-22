import isNode from './is-node.js';
const PhrasingContentTypes = new Set([
    'break',
    'delete',
    'emphasis',
    'footnoteReference',
    'html',
    'image',
    'imageReference',
    'inlineCode',
    'link',
    'linkReference',
    'strong',
    'text'
]);
/**
 * Type guard that checks if a value is a {@link Node} that is {@link PhrasingContent}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that is {@link PhrasingContent}.
 *
 * @example
 * ```ts
 * const node = { type: 'text', value: 'Hello, world!' };
 * isPhrasingContent(node); //=> true, node is PhrasingContent
 * ```
 */
export default ((value) => isNode(value) && PhrasingContentTypes.has(value.type));

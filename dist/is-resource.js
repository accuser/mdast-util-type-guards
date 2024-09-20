import isNode from './is-node.js';
/**
 * Type guard that checks if a value is a {@link Node} that implements the {@link Resource} interface.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that implements the {@link Resource} interface.
 * @see {@link https://github.com/syntax-tree/mdast#resource} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'definition', identifier: 'foo', url: 'https://example.com' };
 * isResource(node); //=> true, node is Node & Resource
 * ```
 */
export default ((value) => isNode(value) && 'url' in value && typeof value.url === 'string');

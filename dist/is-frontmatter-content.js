import isNode from './is-node.js';
const frontmatterContentTypes = new Set(['yaml']);
/**
 * Type guard that checks if a value is a {@link Node} that is {@link FrontmatterContent}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that is {@link FrontmatterContent}.
 *
 * @example
 * ```ts
 * const node = { type: 'yaml', value: 'foo: bar' };
 * isFrontmatterContent(node); //=> true, node is FrontmatterContent
 * ```
 */
export default ((value) => isNode(value) && frontmatterContentTypes.has(value.type));

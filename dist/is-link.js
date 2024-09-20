import isParent from './is-parent.js';
import isResource from './is-resource.js';
/**
 * Type guard that checks if a value is a {@link Link} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Link} node.
 *
 * @example
 * ```ts
 * const node = { type: 'link', identifier: 'foo', url: 'http://example.com', children: [] };
 * isLink(node); //=> true, node is Link
 * ```
 */
export default ((value) => isParent(value) && isResource(value) && value.type === 'link');

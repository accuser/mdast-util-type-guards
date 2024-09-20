import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Link } from 'mdast';
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
declare const _default: TypeGuard<Link>;
export default _default;

import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { List } from 'mdast';
import isParent from './is-parent.js';

/**
 * Type guard that checks if a value is a {@link List} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link List} node.
 *
 * @example
 * ```ts
 * const node = { type: 'list', children: [] };
 * isList(node); //=> true, node is List
 * ```
 */
export default ((value) => isParent(value) && value.type === 'list') as TypeGuard<List>;

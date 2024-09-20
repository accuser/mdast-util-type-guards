import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Delete } from 'mdast';
import isParent from './is-parent.js';

/**
 * Type guard that checks if a value is a {@link Delete} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Delete} node.
 *
 * @example
 * ```ts
 * const node = { type: 'delete', children: [] };
 * isDelete(node); //=> true, node is Delete
 * ```
 */
export default ((value) => isParent(value) && value.type === 'delete') as TypeGuard<Delete>;

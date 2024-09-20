import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { TableRow } from 'mdast';
import isParent from './is-parent.js';

/**
 * Type guard that checks if a value is a {@link TableRow} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link TableRow} node.
 *
 * @example
 * ```ts
 * const node = { type: 'tableRow', children: [] };
 * isTableRow(node); //=> true, node is TableRow
 * ```
 */
export default ((value) => isParent(value) && value.type === 'tableRow') as TypeGuard<TableRow>;

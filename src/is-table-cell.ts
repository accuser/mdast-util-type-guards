import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { TableCell } from 'mdast';
import isParent from './is-parent.js';

/**
 * Type guard that checks if a value is a {@link TableCell} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link TableCell} node.
 *
 * @example
 * ```ts
 * const node = { type: 'tableCell', children: [] };
 * isTableCell(node); //=> true, node is TableCell
 * ```
 */
export default ((value) => isParent(value) && value.type === 'tableCell') as TypeGuard<TableCell>;

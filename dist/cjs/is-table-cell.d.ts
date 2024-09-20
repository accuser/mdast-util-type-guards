import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { TableCell } from 'mdast';
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
declare const _default: TypeGuard<TableCell>;
export default _default;

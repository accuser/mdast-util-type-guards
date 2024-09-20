import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { TableRow } from 'mdast';
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
declare const _default: TypeGuard<TableRow>;
export default _default;

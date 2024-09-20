import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Table } from 'mdast';
/**
 * Type guard that checks if a value is a {@link Table} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Table} node.
 *
 * @example
 * ```ts
 * const node = { type: 'table', children: [] };
 * isTable(node); //=> true, node is Table
 * ```
 */
declare const _default: TypeGuard<Table>;
export default _default;

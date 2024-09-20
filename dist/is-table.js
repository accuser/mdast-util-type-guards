import isParent from './is-parent.js';
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
export default ((value) => isParent(value) && value.type === 'table');

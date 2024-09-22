import { TypeGuard } from '@accuser/unist-util-type-guards';
import { RowContent } from 'mdast';
/**
 * Type guard that checks if a value is a {@link Node} that is {@link RowContent}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that is {@link RowContent}.
 *
 * @example
 * ```ts
 * const node = { type: 'tableCell', children: [{ type: 'text', value: 'Hello, world!' }] };
 * isRowContent(node); //=> true, node is RowContent
 * ```
 */
declare const _default: TypeGuard<RowContent>;
export default _default;

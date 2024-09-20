import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { ListItem } from 'mdast';
/**
 * Type guard that checks if a value is a {@link ListItem} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link ListItem} node.
 *
 * @example
 * ```ts
 * const node = { type: 'listItem', children: [] };
 * isListItem(node); //=> true, node is ListItem
 * ```
 */
declare const _default: TypeGuard<ListItem>;
export default _default;

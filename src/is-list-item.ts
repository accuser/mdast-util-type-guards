import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { ListItem } from 'mdast';
import isParent from './is-parent.js';

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
export default ((value) => isParent(value) && value.type === 'listItem') as TypeGuard<ListItem>;

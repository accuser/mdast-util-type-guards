import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Root } from 'mdast';
import isParent from './is-parent.js';

/**
 * Type guard that checks if a value is a {@link Root} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Root} node.
 *
 * @example
 * ```ts
 * const node = { type: 'root', children: [] };
 * isRoot(node); //=> true, node is Root
 * ```
 */
export default ((value) => isParent(value) && value.type === 'root') as TypeGuard<Root>;

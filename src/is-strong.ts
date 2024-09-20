import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Strong } from 'mdast';
import isParent from './is-parent.js';

/**
 * Type guard that checks if a value is a {@link Strong} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Strong} node.
 *
 * @example
 * ```ts
 * const node = { type: 'strong', children: [] };
 * isStrong(node); //=> true, node is Strong
 * ```
 */
export default ((value) => isParent(value) && value.type === 'strong') as TypeGuard<Strong>;

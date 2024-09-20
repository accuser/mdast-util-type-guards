import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Strong } from 'mdast';
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
declare const _default: TypeGuard<Strong>;
export default _default;

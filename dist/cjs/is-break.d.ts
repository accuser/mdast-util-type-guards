import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Break } from 'mdast';
/**
 * Type guard that checks if a value is a {@link Break} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Break} node.
 *
 * @example
 * ```ts
 * const node = { type: 'break' };
 * isBreak(node); //=> true, node is Break
 * ```
 */
declare const _default: TypeGuard<Break>;
export default _default;

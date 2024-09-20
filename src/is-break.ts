import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Break } from 'mdast';
import isNode from './is-node.js';

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
export default ((value) => isNode(value) && value.type === 'break') as TypeGuard<Break>;

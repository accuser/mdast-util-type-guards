import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Code } from 'mdast';
/**
 * Type guard that checks if a value is a {@link Code} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Code} node.
 *
 * @example
 * ```ts
 * const node = { type: 'code', value: 'console.log("Hello, world!")' };
 * isCode(node); //=> true, node is Code
 * ```
 */
declare const _default: TypeGuard<Code>;
export default _default;

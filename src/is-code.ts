import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Code } from 'mdast';
import isLiteral from './is-literal.js';

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
export default ((value) => isLiteral(value) && value.type === 'code') as TypeGuard<Code>;

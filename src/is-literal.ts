import { isLiteral, type TypeGuard } from '@accuser/unist-util-type-guards';
import { Literal } from 'mdast';

/**
 * Type guard that checks if a value is a {@link Literal} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Literal} node.
 * @see {@link https://github.com/syntax-tree/mdast#literal} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'code', value: 'console.log("Hello, world!")' };
 * isLiteral(node); //=> true, node is Literal
 * ```
 */
export default ((value) =>
	isLiteral(value) && typeof value.value === 'string') as TypeGuard<Literal>;

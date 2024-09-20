import type { TypeGuard } from '@accuser/unist-util-type-guards';
import type { InlineCode } from 'mdast';
import isLiteral from './is-literal.js';

/**
 * Type guard that checks if a value is a {@link InlineCode} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link InlineCode} node.
 *
 * @example
 * ```ts
 * const node = { type: 'inlineCode', value: 'console.log("Hello, world!")' };
 * isInlineCode(node); //=> true, node is InlineCode
 * ```
 */
export default ((value) =>
	isLiteral(value) && value.type === 'inlineCode') as TypeGuard<InlineCode>;

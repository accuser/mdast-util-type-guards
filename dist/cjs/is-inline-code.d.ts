import type { TypeGuard } from '@accuser/unist-util-type-guards';
import type { InlineCode } from 'mdast';
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
declare const _default: TypeGuard<InlineCode>;
export default _default;

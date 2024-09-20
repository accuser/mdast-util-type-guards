import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { FootnoteReference } from 'mdast';
/**
 * Type guard that checks if a value is a {@link FootnoteReference} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link FootnoteReference} node.
 *
 * @example
 * ```ts
 * const node = { type: 'footnoteReference', identifier: 'foo' };
 * isFootnoteReference(node); //=> true, node is FootnoteReference
 * ```
 */
declare const _default: TypeGuard<FootnoteReference>;
export default _default;

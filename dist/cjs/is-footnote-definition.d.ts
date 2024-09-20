import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { FootnoteDefinition } from 'mdast';
/**
 * Type guard that checks if a value is a {@link FootnoteDefinition} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link FootnoteDefinition} node.
 *
 * @example
 * ```ts
 * const node = { type: 'footnoteDefinition', identifier: 'foo', children: [] };
 * isFootnoteDefinition(node); //=> true, node is FootnoteDefinition
 * ```
 */
declare const _default: TypeGuard<FootnoteDefinition>;
export default _default;

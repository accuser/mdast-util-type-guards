import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Paragraph } from 'mdast';
/**
 * Type guard that checks if a value is a {@link Paragraph} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Paragraph} node.
 *
 * @example
 * ```ts
 * const node = { type: 'paragraph', children: [] };
 * isParagraph(node); //=> true, node is Paragraph
 * ```
 */
declare const _default: TypeGuard<Paragraph>;
export default _default;

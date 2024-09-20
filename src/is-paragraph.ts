import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Paragraph } from 'mdast';
import isParent from './is-parent.js';

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
export default ((value) => isParent(value) && value.type === 'paragraph') as TypeGuard<Paragraph>;

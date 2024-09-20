import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Heading } from 'mdast';
/**
 * Type guard that checks if a value is a {@link Heading} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Heading} node.
 *
 * @example
 * ```ts
 * const node = { type: 'heading', depth: 1, children: [] };
 * isHeading(node); //=> true, node is Heading
 * ```
 */
declare const _default: TypeGuard<Heading>;
export default _default;

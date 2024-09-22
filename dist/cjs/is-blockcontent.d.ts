import { TypeGuard } from '@accuser/unist-util-type-guards';
import { BlockContent } from 'mdast';
/**
 * Type guard that checks if a value is a {@link Node} that is {@link BlockContent}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that is {@link BlockContent}.
 *
 * @example
 * ```ts
 * const node = { type: 'paragraph', children: [{ type: 'text', value: 'Hello, world!' }] };
 * isBlockContent(node); //=> true, node is BlockContent
 * ```
 */
declare const _default: TypeGuard<BlockContent>;
export default _default;

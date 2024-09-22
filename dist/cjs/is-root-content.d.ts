import { TypeGuard } from '@accuser/unist-util-type-guards';
import { RootContent } from 'mdast';
/**
 * Type guard that checks if a value is a {@link Node} that is {@link RootContent}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that is {@link RootContent}.
 *
 * @example
 * ```ts
 * const node = { type: 'paragraph', children: [{ type: 'text', value: 'Hello, world!' }] };
 * isRootContent(node); //=> true, node is RootContent
 * ```
 */
declare const _default: TypeGuard<RootContent>;
export default _default;

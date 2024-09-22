import { TypeGuard } from '@accuser/unist-util-type-guards';
import { ListContent } from 'mdast';
/**
 * Type guard that checks if a value is a {@link Node} that is {@link ListContent}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that is {@link ListContent}.
 *
 * @example
 * ```ts
 * const node = { type: 'listItem', children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, world!' }] }] };
 * isListContent(node); //=> true, node is ListContent
 * ```
 */
declare const _default: TypeGuard<ListContent>;
export default _default;

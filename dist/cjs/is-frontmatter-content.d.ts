import { TypeGuard } from '@accuser/unist-util-type-guards';
import { FrontmatterContent } from 'mdast';
/**
 * Type guard that checks if a value is a {@link Node} that is {@link FrontmatterContent}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that is {@link FrontmatterContent}.
 *
 * @example
 * ```ts
 * const node = { type: 'yaml', value: 'foo: bar' };
 * isFrontmatterContent(node); //=> true, node is FrontmatterContent
 * ```
 */
declare const _default: TypeGuard<FrontmatterContent>;
export default _default;

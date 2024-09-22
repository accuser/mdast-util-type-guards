import { TypeGuard } from '@accuser/unist-util-type-guards';
import { PhrasingContent } from 'mdast';
/**
 * Type guard that checks if a value is a {@link Node} that is {@link PhrasingContent}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that is {@link PhrasingContent}.
 *
 * @example
 * ```ts
 * const node = { type: 'text', value: 'Hello, world!' };
 * isPhrasingContent(node); //=> true, node is PhrasingContent
 * ```
 */
declare const _default: TypeGuard<PhrasingContent>;
export default _default;

import { TypeGuard } from '@accuser/unist-util-type-guards';
import { DefinitionContent } from 'mdast';
/**
 * Type guard that checks if a value is a {@link Node} that is {@link DefinitionContent}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that is {@link DefinitionContent}.
 *
 * @example
 * ```ts
 * const node = { type: 'definition', identifier: 'foo', url: 'https://example.com' };
 * isDefinitionContent(node); //=> true, node is DefinitionContent
 * ```

 */
declare const _default: TypeGuard<DefinitionContent>;
export default _default;

import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { LinkReference } from 'mdast';
/**
 * Type guard that checks if a value is a {@link LinkReference} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link LinkReference} node.
 *
 * @example
 * ```ts
 * const node = { type: 'linkReference', identifier: 'foo', referenceType: 'full', children: [] };
 * isLinkRefernce(node); //=> true, node is LinkReference
 * ```
 */
declare const _default: TypeGuard<LinkReference>;
export default _default;

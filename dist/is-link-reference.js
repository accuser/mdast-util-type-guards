import isParent from './is-parent.js';
import isReference from './is-reference.js';
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
export default ((value) => isParent(value) &&
    isReference(value) &&
    value.type === 'linkReference');

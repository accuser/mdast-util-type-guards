import isParent from './is-parent.js';
/**
 * Type guard that checks if a value is an {@link Emphasis} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is an {@link Emphasis} node.
 *
 * @example
 * ```ts
 * const node = { type: 'emphasis', children: [] };
 * isEmphasis(node); //=> true, node is Emphasis
 * ```
 */
export default ((value) => isParent(value) && value.type === 'emphasis');

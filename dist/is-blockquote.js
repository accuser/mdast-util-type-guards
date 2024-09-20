import isParent from './is-parent.js';
/**
 * Type guard that checks if a value is a {@link Blockquote} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Blockquote} node.
 *
 * @example
 * ```ts
 * const node = { type: 'blockquote', children: [] };
 * isBlockquote(node); //=> true, node is Blockquote
 * ```
 */
export default ((value) => isParent(value) && value.type === 'blockquote');

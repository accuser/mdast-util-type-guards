import isParent from './is-parent.js';
/**
 * Type guard that checks if a value is a {@link Heading} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Heading} node.
 *
 * @example
 * ```ts
 * const node = { type: 'heading', depth: 1, children: [] };
 * isHeading(node); //=> true, node is Heading
 * ```
 */
export default ((value) => isParent(value) &&
    value.type === 'heading' &&
    'depth' in value &&
    typeof value.depth === 'number');

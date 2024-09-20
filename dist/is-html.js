import isLiteral from './is-literal.js';
/**
 * Type guard that checks if a value is an {@link Html} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is an {@link Html} node.
 *
 * @example
 * ```ts
 * const node = { type: 'html', value: '<h1>Hello, world!</h1>' };
 * isHtml(node); //=> true, node is Heading
 * ```
 */
export default ((value) => isLiteral(value) && value.type === 'html');

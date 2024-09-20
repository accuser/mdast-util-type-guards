import isLiteral from './is-literal.js';
/**
 * Type guard that checks if a value is a {@link Yaml} node.
 *
 * @param node - The value to test.
 * @returns {boolean} Whether `node` is a {@link Yaml} node.
 *
 * @example
 * ```ts
 * const node = { type: 'yaml', value: 'foo: bar' };
 * isYaml(node); //=> true, node is Yaml
 * ```
 */
export default ((value) => isLiteral(value) && value.type === 'yaml');

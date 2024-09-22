import isNode from './is-node.js';
const definitionContentTypes = new Set(['definition', 'footnoteDefinition']);
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
export default ((value) => isNode(value) && definitionContentTypes.has(value.type));

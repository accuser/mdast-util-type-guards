"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_node_js_1 = __importDefault(require("./is-node.js"));
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
exports.default = ((value) => (0, is_node_js_1.default)(value) && definitionContentTypes.has(value.type));

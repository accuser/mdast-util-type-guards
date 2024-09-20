"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_node_js_1 = __importDefault(require("./is-node.js"));
/**
 * Type guard that checks if a value is a {@link Node} that implements the {@link Resource} interface.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that implements the {@link Resource} interface.
 * @see {@link https://github.com/syntax-tree/mdast#resource} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'definition', identifier: 'foo', url: 'https://example.com' };
 * isResource(node); //=> true, node is Node & Resource
 * ```
 */
exports.default = ((value) => (0, is_node_js_1.default)(value) && 'url' in value && typeof value.url === 'string');

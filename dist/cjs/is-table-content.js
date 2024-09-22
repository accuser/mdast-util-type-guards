"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_node_js_1 = __importDefault(require("./is-node.js"));
const tableContentTypes = new Set(['tableRow']);
/**
 * Type guard that checks if a value is a {@link Node} that is {@link TableContent}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that is {@link TableContent}.
 *
 * @example
 * ```ts
 * const node = { type: 'tableRow', children: [{ type: 'tableCell', children: [{ type: 'text', value: 'Hello, world!' }] }] };
 * isTableContent(node); //=> true, node is TableContent
 * ```
 */
exports.default = ((value) => (0, is_node_js_1.default)(value) && tableContentTypes.has(value.type));

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_node_js_1 = __importDefault(require("./is-node.js"));
const rowContentTypes = new Set(['tableCell']);
/**
 * Type guard that checks if a value is a {@link Node} that is {@link RowContent}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that is {@link RowContent}.
 *
 * @example
 * ```ts
 * const node = { type: 'tableCell', children: [{ type: 'text', value: 'Hello, world!' }] };
 * isRowContent(node); //=> true, node is RowContent
 * ```
 */
exports.default = ((value) => (0, is_node_js_1.default)(value) && rowContentTypes.has(value.type));

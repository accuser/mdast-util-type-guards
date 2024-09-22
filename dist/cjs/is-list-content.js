"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_node_js_1 = __importDefault(require("./is-node.js"));
const listContentTypes = new Set(['listItem']);
/**
 * Type guard that checks if a value is a {@link Node} that is {@link ListContent}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that is {@link ListContent}.
 *
 * @example
 * ```ts
 * const node = { type: 'listItem', children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello, world!' }] }] };
 * isListContent(node); //=> true, node is ListContent
 * ```
 */
exports.default = ((value) => (0, is_node_js_1.default)(value) && listContentTypes.has(value.type));

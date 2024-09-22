"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_node_js_1 = __importDefault(require("./is-node.js"));
const blockContentTypes = new Set([
    'blockquote',
    'code',
    'heading',
    'html',
    'list',
    'paragraph',
    'table',
    'thematicBreak'
]);
/**
 * Type guard that checks if a value is a {@link Node} that is {@link BlockContent}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that is {@link BlockContent}.
 *
 * @example
 * ```ts
 * const node = { type: 'paragraph', children: [{ type: 'text', value: 'Hello, world!' }] };
 * isBlockContent(node); //=> true, node is BlockContent
 * ```
 */
exports.default = ((value) => (0, is_node_js_1.default)(value) && blockContentTypes.has(value.type));

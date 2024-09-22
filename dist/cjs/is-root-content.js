"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_node_js_1 = __importDefault(require("./is-node.js"));
const rootContentTypes = new Set([
    'break',
    'code',
    'definition',
    'delete',
    'emphasis',
    'footnoteDefinition',
    'footnoteReference',
    'heading',
    'html',
    'image',
    'imageReference',
    'inlineCode',
    'link',
    'linkReference',
    'list',
    'listItem',
    'paragraph',
    'strong',
    'table',
    'tableCell',
    'tableRow',
    'text',
    'thematicBreak',
    'yaml'
]);
/**
 * Type guard that checks if a value is a {@link Node} that is {@link RootContent}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that is {@link RootContent}.
 *
 * @example
 * ```ts
 * const node = { type: 'paragraph', children: [{ type: 'text', value: 'Hello, world!' }] };
 * isRootContent(node); //=> true, node is RootContent
 * ```
 */
exports.default = ((value) => (0, is_node_js_1.default)(value) && rootContentTypes.has(value.type));

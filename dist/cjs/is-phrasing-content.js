"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_node_js_1 = __importDefault(require("./is-node.js"));
const PhrasingContentTypes = new Set([
    'break',
    'delete',
    'emphasis',
    'footnoteReference',
    'html',
    'image',
    'imageReference',
    'inlineCode',
    'link',
    'linkReference',
    'strong',
    'text'
]);
/**
 * Type guard that checks if a value is a {@link Node} that is {@link PhrasingContent}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that is {@link PhrasingContent}.
 *
 * @example
 * ```ts
 * const node = { type: 'text', value: 'Hello, world!' };
 * isPhrasingContent(node); //=> true, node is PhrasingContent
 * ```
 */
exports.default = ((value) => (0, is_node_js_1.default)(value) && PhrasingContentTypes.has(value.type));

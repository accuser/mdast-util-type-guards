"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_node_js_1 = __importDefault(require("./is-node.js"));
const frontmatterContentTypes = new Set(['yaml']);
/**
 * Type guard that checks if a value is a {@link Node} that is {@link FrontmatterContent}.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that is {@link FrontmatterContent}.
 *
 * @example
 * ```ts
 * const node = { type: 'yaml', value: 'foo: bar' };
 * isFrontmatterContent(node); //=> true, node is FrontmatterContent
 * ```
 */
exports.default = ((value) => (0, is_node_js_1.default)(value) && frontmatterContentTypes.has(value.type));

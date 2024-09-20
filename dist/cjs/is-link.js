"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_parent_js_1 = __importDefault(require("./is-parent.js"));
const is_resource_js_1 = __importDefault(require("./is-resource.js"));
/**
 * Type guard that checks if a value is a {@link Link} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Link} node.
 *
 * @example
 * ```ts
 * const node = { type: 'link', identifier: 'foo', url: 'http://example.com', children: [] };
 * isLink(node); //=> true, node is Link
 * ```
 */
exports.default = ((value) => (0, is_parent_js_1.default)(value) && (0, is_resource_js_1.default)(value) && value.type === 'link');

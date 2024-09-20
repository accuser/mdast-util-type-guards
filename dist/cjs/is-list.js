"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_parent_js_1 = __importDefault(require("./is-parent.js"));
/**
 * Type guard that checks if a value is a {@link List} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link List} node.
 *
 * @example
 * ```ts
 * const node = { type: 'list', children: [] };
 * isList(node); //=> true, node is List
 * ```
 */
exports.default = ((value) => (0, is_parent_js_1.default)(value) && value.type === 'list');

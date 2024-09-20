"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_parent_js_1 = __importDefault(require("./is-parent.js"));
/**
 * Type guard that checks if a value is a {@link Delete} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Delete} node.
 *
 * @example
 * ```ts
 * const node = { type: 'delete', children: [] };
 * isDelete(node); //=> true, node is Delete
 * ```
 */
exports.default = ((value) => (0, is_parent_js_1.default)(value) && value.type === 'delete');

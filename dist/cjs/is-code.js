"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_literal_js_1 = __importDefault(require("./is-literal.js"));
/**
 * Type guard that checks if a value is a {@link Code} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Code} node.
 *
 * @example
 * ```ts
 * const node = { type: 'code', value: 'console.log("Hello, world!")' };
 * isCode(node); //=> true, node is Code
 * ```
 */
exports.default = ((value) => (0, is_literal_js_1.default)(value) && value.type === 'code');

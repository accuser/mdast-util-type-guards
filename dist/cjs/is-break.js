"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_node_js_1 = __importDefault(require("./is-node.js"));
/**
 * Type guard that checks if a value is a {@link Break} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Break} node.
 *
 * @example
 * ```ts
 * const node = { type: 'break' };
 * isBreak(node); //=> true, node is Break
 * ```
 */
exports.default = ((value) => (0, is_node_js_1.default)(value) && value.type === 'break');

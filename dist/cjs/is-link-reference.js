"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_parent_js_1 = __importDefault(require("./is-parent.js"));
const is_reference_js_1 = __importDefault(require("./is-reference.js"));
/**
 * Type guard that checks if a value is a {@link LinkReference} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link LinkReference} node.
 *
 * @example
 * ```ts
 * const node = { type: 'linkReference', identifier: 'foo', referenceType: 'full', children: [] };
 * isLinkRefernce(node); //=> true, node is LinkReference
 * ```
 */
exports.default = ((value) => (0, is_parent_js_1.default)(value) &&
    (0, is_reference_js_1.default)(value) &&
    value.type === 'linkReference');

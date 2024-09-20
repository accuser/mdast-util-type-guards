"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_association_js_1 = __importDefault(require("./is-association.js"));
/**
 * Type guard that checks if a value is a {@link FootnoteReference} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link FootnoteReference} node.
 *
 * @example
 * ```ts
 * const node = { type: 'footnoteReference', identifier: 'foo' };
 * isFootnoteReference(node); //=> true, node is FootnoteReference
 * ```
 */
exports.default = ((value) => (0, is_association_js_1.default)(value) && value.type === 'footnoteReference');

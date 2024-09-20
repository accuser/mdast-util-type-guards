"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_association_js_1 = __importDefault(require("./is-association.js"));
const is_parent_js_1 = __importDefault(require("./is-parent.js"));
/**
 * Type guard that checks if a value is a {@link FootnoteDefinition} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link FootnoteDefinition} node.
 *
 * @example
 * ```ts
 * const node = { type: 'footnoteDefinition', identifier: 'foo', children: [] };
 * isFootnoteDefinition(node); //=> true, node is FootnoteDefinition
 * ```
 */
exports.default = ((value) => (0, is_association_js_1.default)(value) &&
    (0, is_parent_js_1.default)(value) &&
    value.type === 'footnoteDefinition');

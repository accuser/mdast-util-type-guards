"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_association_js_1 = __importDefault(require("./is-association.js"));
/**
 * Type guard that checks if a value is a {@link Node} that implements the {@link Reference} interface.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Node} that implements the {@link Reference} interface.
 * @see {@link https://github.com/syntax-tree/mdast#reference} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'definition', identifier: 'foo', referenceType: 'full', url: 'https://example.com' };
 * isReference(node); //=> true, node is Node & Reference
 * ```
 */
exports.default = ((value) => (0, is_association_js_1.default)(value) &&
    'referenceType' in value &&
    typeof value.referenceType === 'string' &&
    ['collapsed', 'shortcut', 'full'].includes(value.referenceType));

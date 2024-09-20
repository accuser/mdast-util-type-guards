"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_association_js_1 = __importDefault(require("./is-association.js"));
const is_resource_js_1 = __importDefault(require("./is-resource.js"));
/**
 * Type guard that checks if a value is a {@link Definition} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Definition} node.
 *
 * @example
 * ```ts
 * const node = { type: 'definition', identifier: 'foo', url: 'https://example.com' };
 * isDefinition(node); //=> true, node is Definition
 * ```
 */
exports.default = ((value) => (0, is_association_js_1.default)(value) &&
    (0, is_resource_js_1.default)(value) &&
    value.type === 'definition');

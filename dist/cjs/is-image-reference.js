"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_reference_js_1 = __importDefault(require("./is-reference.js"));
/**
 * Type guard that checks if a value is an {@link ImageReference} value.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is an {@link ImageReference} value.
 *
 * @example
 * ```ts
 * const value = { type: 'imageReference', referenceType: 'full', identifier: 'foo' };
 * isImageReference(value); //=> true, value is ImageReference
 * ```
 */
exports.default = ((value) => (0, is_reference_js_1.default)(value) && value.type === 'imageReference');

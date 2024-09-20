"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_resource_js_1 = __importDefault(require("./is-resource.js"));
/**
 * Type guard that checks if a value is an {@link Image} value.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is an {@link Image} value.
 *
 * @example
 * ```ts
 * const value = { type: 'image', url: 'http://example.com/image.jpg' };
 * isImage(value); //=> true, value is Image
 * ```
 */
exports.default = ((value) => (0, is_resource_js_1.default)(value) && value.type === 'image');

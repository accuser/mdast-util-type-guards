"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_literal_js_1 = __importDefault(require("./is-literal.js"));
/**
 * Type guard that checks if a value is a {@link Yaml} node.
 *
 * @param node - The value to test.
 * @returns {boolean} Whether `node` is a {@link Yaml} node.
 *
 * @example
 * ```ts
 * const node = { type: 'yaml', value: 'foo: bar' };
 * isYaml(node); //=> true, node is Yaml
 * ```
 */
exports.default = ((value) => (0, is_literal_js_1.default)(value) && value.type === 'yaml');

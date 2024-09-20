"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unist_util_type_guards_1 = require("@accuser/unist-util-type-guards");
/**
 * Type guard that checks if a value is a {@link Literal} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Literal} node.
 * @see {@link https://github.com/syntax-tree/mdast#literal} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'code', value: 'console.log("Hello, world!")' };
 * isLiteral(node); //=> true, node is Literal
 * ```
 */
exports.default = ((value) => (0, unist_util_type_guards_1.isLiteral)(value) && typeof value.value === 'string');

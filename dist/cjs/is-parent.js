"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unist_util_type_guards_1 = require("@accuser/unist-util-type-guards");
/**
 * Type guard that checks if a value is a {@link Parent} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Parent} node.
 * @see {@link https://github.com/syntax-tree/mdast#parent} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'blockquote', children: [] };
 * isParent(node); //=> true, node is Parent
 * ```
 */
exports.default = unist_util_type_guards_1.isParent;

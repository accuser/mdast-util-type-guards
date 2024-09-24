"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unist_util_type_guards_1 = require("@accuser/unist-util-type-guards");
/**
 * Type guard that checks if a value is a {@link Parent} node with a single child element.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Parent} node with a single child element.
 * @see {@link https://github.com/syntax-tree/mdast#parent} for more information.
 *
 * @example
 * ```ts
 * const node = { type: 'paragraph', children: [{ type: 'text', value: "Hello, World!" }] };
 * isMonoparous(node); //=> true, node is Parent
 * ```
 */
exports.default = unist_util_type_guards_1.isMonoparous;

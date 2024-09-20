import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Text } from 'mdast';
import isLiteral from './is-literal.js';

/**
 * Type guard that checks if a value is a {@link Text} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Text} node.
 *
 * @example
 * ```ts
 * const node = { type: 'text', value: 'Hello, World!' };
 * isText(node); //=> true, node is Text
 * ```
 */
export default ((value) => isLiteral(value) && value.type === 'text') as TypeGuard<Text>;

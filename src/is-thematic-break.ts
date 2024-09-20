import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { ThematicBreak } from 'mdast';
import isNode from './is-node.js';

/**
 * Type guard that checks if a value is a {@link ThematicBreak} node.
 *
 * @param node - The value to test.
 * @returns {boolean} Whether `node` is a {@link ThematicBreak} node.
 *
 * @example
 * ```ts
 * const node = { type: 'thematicBreak' };
 * isThematicBreak(node); //=> true, node is ThematicBreak
 * ```
 */
export default ((value) =>
	isNode(value) && value.type === 'thematicBreak') as TypeGuard<ThematicBreak>;

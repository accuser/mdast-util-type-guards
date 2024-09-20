import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { ThematicBreak } from 'mdast';
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
declare const _default: TypeGuard<ThematicBreak>;
export default _default;

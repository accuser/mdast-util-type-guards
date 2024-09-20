import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Html } from 'mdast';
/**
 * Type guard that checks if a value is an {@link Html} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is an {@link Html} node.
 *
 * @example
 * ```ts
 * const node = { type: 'html', value: '<h1>Hello, world!</h1>' };
 * isHtml(node); //=> true, node is Heading
 * ```
 */
declare const _default: TypeGuard<Html>;
export default _default;

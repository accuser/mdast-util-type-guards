import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Yaml } from 'mdast';
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
declare const _default: TypeGuard<Yaml>;
export default _default;

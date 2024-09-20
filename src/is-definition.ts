import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Definition } from 'mdast';
import isAssociation from './is-association.js';
import isResource from './is-resource.js';

/**
 * Type guard that checks if a value is a {@link Definition} node.
 *
 * @param value - The value to test.
 * @returns {boolean} Whether `value` is a {@link Definition} node.
 *
 * @example
 * ```ts
 * const node = { type: 'definition', identifier: 'foo', url: 'https://example.com' };
 * isDefinition(node); //=> true, node is Definition
 * ```
 */
export default ((value) =>
	isAssociation(value) &&
	isResource(value) &&
	value.type === 'definition') as TypeGuard<Definition>;

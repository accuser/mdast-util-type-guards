import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { LinkReference } from 'mdast';
import isParent from './is-parent.js';
import isReference from './is-reference.js';

export default ((node) =>
	isParent(node) && isReference(node) && node.type === 'linkReference') as TypeGuard<LinkReference>;

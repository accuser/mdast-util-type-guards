import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Heading } from 'mdast';
import isParent from './is-parent.js';

export default ((node) =>
	isParent(node) &&
	node.type === 'heading' &&
	'depth' in node &&
	typeof node.depth === 'number') as TypeGuard<Heading>;

import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Link } from 'mdast';
import isParent from './is-parent.js';
import isResource from './is-resource.js';

export default ((node) =>
	isParent(node) && isResource(node) && node.type === 'link') as TypeGuard<Link>;

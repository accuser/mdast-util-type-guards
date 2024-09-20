import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { ImageReference } from 'mdast';
import isReference from './is-reference.js';

export default ((node) =>
	isReference(node) && node.type === 'imageReference') as TypeGuard<ImageReference>;

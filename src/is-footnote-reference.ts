import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { FootnoteReference } from 'mdast';
import isAssociation from './is-association.js';
import isNode from './is-node.js';

export default ((node) =>
	isNode(node) &&
	node.type === 'footnoteReference' &&
	isAssociation(node)) as TypeGuard<FootnoteReference>;

import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { FootnoteDefinition } from 'mdast';
import isAssociation from './is-association.js';
import isParent from './is-parent.js';

export default ((node) =>
	isAssociation(node) &&
	isParent(node) &&
	node.type === 'footnoteDefinition') as TypeGuard<FootnoteDefinition>;

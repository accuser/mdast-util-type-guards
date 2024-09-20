import { TypeGuard } from '@accuser/unist-util-type-guards';
import { Node, Reference } from 'mdast';
import isAssociation from './is-association.js';

export default ((node) =>
	isAssociation(node) &&
	'referenceType' in node &&
	typeof node.referenceType === 'string') as TypeGuard<Node & Reference>;

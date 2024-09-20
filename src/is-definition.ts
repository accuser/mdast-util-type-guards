import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Definition } from 'mdast';
import isAssociation from './is-association.js';
import isResource from './is-resource.js';

export default ((node) =>
	isAssociation(node) && isResource(node) && node.type === 'definition') as TypeGuard<Definition>;

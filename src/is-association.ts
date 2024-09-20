import { TypeGuard } from '@accuser/unist-util-type-guards';
import { Association, Node } from 'mdast';
import isNode from './is-node.js';

export default ((node) =>
	isNode(node) && 'identifier' in node && typeof node.identifier === 'string') as TypeGuard<
	Node & Association
>;

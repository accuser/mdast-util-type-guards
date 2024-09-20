import { TypeGuard } from '@accuser/unist-util-type-guards';
import { Node, Resource } from 'mdast';
import isNode from './is-node.js';

export default ((node) =>
	isNode(node) && 'url' in node && typeof node.url === 'string') as TypeGuard<Node & Resource>;

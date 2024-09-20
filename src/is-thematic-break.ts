import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { ThematicBreak } from 'mdast';
import isNode from './is-node.js';

export default ((node) =>
	isNode(node) && node.type === 'thematicBreak') as TypeGuard<ThematicBreak>;

import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Break } from 'mdast';
import isNode from './is-node.js';

export default ((node) => isNode(node) && node.type === 'break') as TypeGuard<Break>;

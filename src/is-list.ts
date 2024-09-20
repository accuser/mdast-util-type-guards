import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { List } from 'mdast';
import isParent from './is-parent.js';

export default ((node) => isParent(node) && node.type === 'list') as TypeGuard<List>;

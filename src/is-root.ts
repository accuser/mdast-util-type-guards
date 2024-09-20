import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Root } from 'mdast';
import isParent from './is-parent.js';

export default ((node) => isParent(node) && node.type === 'root') as TypeGuard<Root>;

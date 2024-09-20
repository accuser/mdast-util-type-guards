import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { TableCell } from 'mdast';
import isParent from './is-parent.js';

export default ((node) => isParent(node) && node.type === 'tableCell') as TypeGuard<TableCell>;

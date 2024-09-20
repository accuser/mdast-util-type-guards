import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { TableRow } from 'mdast';
import isParent from './is-parent.js';

export default ((node) => isParent(node) && node.type === 'tableRow') as TypeGuard<TableRow>;

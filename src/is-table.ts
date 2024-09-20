import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Table } from 'mdast';
import isParent from './is-parent.js';

export default ((node) => isParent(node) && node.type === 'table') as TypeGuard<Table>;

import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { ListItem } from 'mdast';
import isParent from './is-parent.js';

export default ((node) => isParent(node) && node.type === 'listItem') as TypeGuard<ListItem>;

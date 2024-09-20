import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Blockquote } from 'mdast';
import isParent from './is-parent.js';

export default ((node) => isParent(node) && node.type === 'blockqoute') as TypeGuard<Blockquote>;

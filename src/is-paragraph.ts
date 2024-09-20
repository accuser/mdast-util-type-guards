import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Paragraph } from 'mdast';
import isParent from './is-parent.js';

export default ((node) => isParent(node) && node.type === 'paragraph') as TypeGuard<Paragraph>;

import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Delete } from 'mdast';
import isLiteral from './is-literal.js';

export default ((node) => isLiteral(node) && node.type === 'delete') as TypeGuard<Delete>;

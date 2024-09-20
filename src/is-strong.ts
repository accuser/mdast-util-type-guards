import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Strong } from 'mdast';
import isLiteral from './is-literal.js';

export default ((node) => isLiteral(node) && node.type === 'strong') as TypeGuard<Strong>;

import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Emphasis } from 'mdast';
import isLiteral from './is-literal.js';

export default ((node) => isLiteral(node) && node.type === 'emphasis') as TypeGuard<Emphasis>;

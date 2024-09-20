import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Code } from 'mdast';
import isLiteral from './is-literal.js';

export default ((node) => isLiteral(node) && node.type === 'code') as TypeGuard<Code>;

import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Html } from 'mdast';
import isLiteral from './is-literal.js';

export default ((node) => isLiteral(node) && node.type === 'html') as TypeGuard<Html>;

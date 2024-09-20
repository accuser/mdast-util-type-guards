import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Yaml } from 'mdast';
import isLiteral from './is-literal.js';

export default ((node) => isLiteral(node) && node.type === 'yaml') as TypeGuard<Yaml>;

import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Text } from 'mdast';
import isLiteral from './is-literal.js';

export default ((node) => isLiteral(node) && node.type === 'text') as TypeGuard<Text>;

import type { TypeGuard } from '@accuser/unist-util-type-guards';
import type { InlineCode } from 'mdast';
import isLiteral from './is-literal.js';

export default ((node) => isLiteral(node) && node.type === 'inlineCode') as TypeGuard<InlineCode>;

import { isNode, type TypeGuard } from '@accuser/unist-util-type-guards';
import { Node } from 'mdast';

export default isNode as TypeGuard<Node>;

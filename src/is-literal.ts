import { isLiteral, TypeGuard } from '@accuser/unist-util-type-guards';
import { Literal } from 'mdast';

export default isLiteral as TypeGuard<Literal>;

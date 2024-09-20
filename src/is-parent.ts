import { isParent, type TypeGuard } from '@accuser/unist-util-type-guards';
import { Parent } from 'mdast';

export default isParent as TypeGuard<Parent>;

import type { TypeGuard } from '@accuser/unist-util-type-guards';
import { Image } from 'mdast';
import isResource from './is-resource.js';

export default ((node) => isResource(node) && node.type === 'imageReference') as TypeGuard<Image>;

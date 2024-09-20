import isParent from './is-parent.js';
import isReference from './is-reference.js';
export default ((node) => isParent(node) && isReference(node) && node.type === 'linkReference');

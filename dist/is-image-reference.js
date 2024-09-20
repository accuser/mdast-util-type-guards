import isReference from './is-reference.js';
export default ((node) => isReference(node) && node.type === 'imageReference');

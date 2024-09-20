import isResource from './is-resource.js';
export default ((node) => isResource(node) && node.type === 'imageReference');

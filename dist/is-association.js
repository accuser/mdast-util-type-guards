import isNode from './is-node.js';
export default ((node) => isNode(node) && 'identifier' in node && typeof node.identifier === 'string');

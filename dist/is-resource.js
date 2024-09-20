import isNode from './is-node.js';
export default ((node) => isNode(node) && 'url' in node && typeof node.url === 'string');

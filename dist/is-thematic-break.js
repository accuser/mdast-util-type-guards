import isNode from './is-node.js';
export default ((node) => isNode(node) && node.type === 'thematicBreak');

import isParent from './is-parent.js';
export default ((node) => isParent(node) && node.type === 'tableCell');

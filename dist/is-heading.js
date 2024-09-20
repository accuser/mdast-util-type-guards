import isParent from './is-parent.js';
export default ((node) => isParent(node) &&
    node.type === 'heading' &&
    'depth' in node &&
    typeof node.depth === 'number');

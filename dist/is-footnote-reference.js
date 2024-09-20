import isAssociation from './is-association.js';
import isNode from './is-node.js';
export default ((node) => isNode(node) &&
    node.type === 'footnoteReference' &&
    isAssociation(node));

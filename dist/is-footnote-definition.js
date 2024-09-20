import isAssociation from './is-association.js';
import isParent from './is-parent.js';
export default ((node) => isAssociation(node) &&
    isParent(node) &&
    node.type === 'footnoteDefinition');

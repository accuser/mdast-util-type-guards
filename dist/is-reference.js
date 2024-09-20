import isAssociation from './is-association.js';
export default ((node) => isAssociation(node) &&
    'referenceType' in node &&
    typeof node.referenceType === 'string');

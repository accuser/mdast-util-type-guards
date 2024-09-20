import isAssociation from './is-association.js';
import isResource from './is-resource.js';
export default ((node) => isAssociation(node) && isResource(node) && node.type === 'definition');

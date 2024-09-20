import isLiteral from './is-literal.js';
export default ((node) => isLiteral(node) && node.type === 'strong');

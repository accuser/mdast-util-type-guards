"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_association_js_1 = __importDefault(require("./is-association.js"));
exports.default = ((node) => (0, is_association_js_1.default)(node) &&
    'referenceType' in node &&
    typeof node.referenceType === 'string');

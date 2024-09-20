"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_association_js_1 = __importDefault(require("./is-association.js"));
const is_resource_js_1 = __importDefault(require("./is-resource.js"));
exports.default = ((node) => (0, is_association_js_1.default)(node) && (0, is_resource_js_1.default)(node) && node.type === 'definition');

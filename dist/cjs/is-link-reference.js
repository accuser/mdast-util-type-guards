"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_parent_js_1 = __importDefault(require("./is-parent.js"));
const is_reference_js_1 = __importDefault(require("./is-reference.js"));
exports.default = ((node) => (0, is_parent_js_1.default)(node) && (0, is_reference_js_1.default)(node) && node.type === 'linkReference');

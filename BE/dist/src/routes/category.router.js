"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const categoryController_1 = __importDefault(require("../controllers/categoryController"));
const express_1 = require("express");
exports.categoryRouter = (0, express_1.Router)();
exports.categoryRouter.get('/', categoryController_1.default.getAll);
//# sourceMappingURL=category.router.js.map
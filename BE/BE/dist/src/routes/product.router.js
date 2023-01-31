"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const homeController_1 = __importDefault(require("../controllers/homeController"));
const express_1 = require("express");
exports.ProductRouter = (0, express_1.Router)();
exports.ProductRouter.get('/', homeController_1.default.getAll);
exports.ProductRouter.post('/', homeController_1.default.create);
exports.ProductRouter.put('/:id', homeController_1.default.update);
exports.ProductRouter.delete('/:id', homeController_1.default.remove);
//# sourceMappingURL=product.router.js.map
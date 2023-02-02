"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const homeController_1 = __importDefault(require("../controllers/homeController"));
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const adminMiddleware_1 = require("../middleware/adminMiddleware");
exports.ProductRouter = (0, express_1.Router)();
exports.ProductRouter.use(auth_1.auth);
exports.ProductRouter.get('/', homeController_1.default.getAll);
exports.ProductRouter.post('/', adminMiddleware_1.adminAuth, homeController_1.default.create);
exports.ProductRouter.put('/:id', adminMiddleware_1.adminAuth, homeController_1.default.update);
exports.ProductRouter.delete('/:id', adminMiddleware_1.adminAuth, homeController_1.default.remove);
exports.ProductRouter.get('/:id', adminMiddleware_1.adminAuth, homeController_1.default.findById);
//# sourceMappingURL=product.router.js.map
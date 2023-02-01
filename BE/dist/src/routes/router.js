"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const product_router_1 = require("./product.router");
const user_router_1 = require("./user.router");
const category_router_1 = require("./category.router");
exports.router = (0, express_1.Router)();
exports.router.use('/products', product_router_1.ProductRouter);
exports.router.use('/auth', user_router_1.UserRouter);
exports.router.use('/categories', category_router_1.categoryRouter);
//# sourceMappingURL=router.js.map
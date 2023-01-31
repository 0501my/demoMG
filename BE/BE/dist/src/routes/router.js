"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const product_router_1 = require("./product.router");
const user_router_1 = require("./user.router");
exports.router = (0, express_1.Router)();
exports.router.use('/products', product_router_1.ProductRouter);
exports.router.use('/users', user_router_1.UserRouter);
//# sourceMappingURL=router.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const homeController_1 = __importDefault(require("../controllers/homeController"));
const homeController_2 = __importDefault(require("../controllers/homeController"));
exports.router = (0, express_1.Router)();
exports.router.get('/home', homeController_1.default.showHome);
exports.router.get('/products/create', homeController_2.default.showFormCreate);
exports.router.post('/products/create', homeController_2.default.create);
//# sourceMappingURL=router.js.map
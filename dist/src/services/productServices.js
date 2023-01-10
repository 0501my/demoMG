"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../models/product");
class ProductServices {
    constructor() {
        this.getAll = async () => {
            let products = await product_1.Product.find();
            return products;
        };
        this.save = async (product) => {
            return "thanh cong";
        };
    }
}
exports.default = new ProductServices();
//# sourceMappingURL=productServices.js.map
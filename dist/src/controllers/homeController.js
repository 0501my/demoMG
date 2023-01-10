"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productServices_1 = __importDefault(require("../services/productServices"));
class HomeController {
    constructor() {
        this.showHome = async (req, res) => {
            let product = await productServices_1.default.getAll();
            res.render('home', { products: product });
        };
        this.showFormCreate = async (req, res) => {
            res.render('product/create');
        };
        this.create = async (req, res) => {
            if (req.files) {
                let image = req.files.image;
                if ("mv" in image) {
                    await image.mv('./public/storage/' + image.name);
                    let product = req.body;
                    product.image = '/storage/' + image.name;
                    await productServices_1.default.save(product);
                    res.redirect(301, '/home');
                }
            }
        };
        this.remove = async (req, res) => {
        };
        this.productServices = productServices_1.default;
    }
}
exports.default = new HomeController();
//# sourceMappingURL=homeController.js.map
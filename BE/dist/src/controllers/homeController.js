"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productServices_1 = __importDefault(require("../services/productServices"));
const categoryServices_1 = __importDefault(require("../services/categoryServices"));
class HomeController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let product = await productServices_1.default.getAll();
                res.status(200).json(product);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.create = async (req, res) => {
            try {
                let newProduct = await productServices_1.default.save(req.body);
                res.status(200).json(newProduct);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.update = async (req, res) => {
            try {
                let id = req.params.id;
                let editProduct = await this.productServices.update(id, req.body);
                res.status(200).json({ ok: editProduct, message: 'thanh cong' });
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.remove = async (req, res) => {
            try {
                let id = req.params.id;
                let removeProduct = await this.productServices.remove(id);
                res.status(200).json({ ok: removeProduct, message: 'xoa roi' });
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.findById = async (req, res) => {
            let id = req.params.id;
            let findById = await this.productServices.findById(id);
            res.status(200).json(findById);
        };
        this.productServices = productServices_1.default;
        this.categoryServices = categoryServices_1.default;
    }
}
exports.default = new HomeController();
//# sourceMappingURL=homeController.js.map
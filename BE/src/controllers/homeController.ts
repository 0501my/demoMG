import {Request, Response} from "express";
import productServices from "../services/productServices";
import categoryServices from "../services/categoryServices";

class HomeController {
    private productServices;
    private categoryServices;

    constructor() {
        this.productServices = productServices;
        this.categoryServices = categoryServices;

    }

    getAll = async (req: Request, res: Response) => {
        try {
            let product = await productServices.getAll()
            res.status(200).json(product)
        } catch (e) {
            res.status(500).json(e.message)
        }

    }
    create = async (req: Request, res: Response) => {
        try {
            let newProduct = await productServices.save(req.body)
            res.status(200).json(newProduct);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    update = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let editProduct = await this.productServices.update(id, req.body)
            res.status(200).json({ok: editProduct, message: 'thanh cong'})
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    remove = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let removeProduct = await this.productServices.remove(id)
            res.status(200).json({ok: removeProduct, message: 'xoa roi'})
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    findById = async (req: Request, res: Response) => {
        let id = req.params.id
        let findById = await this.productServices.findById(id);
        res.status(200).json(findById)
    }

}

export default new HomeController();

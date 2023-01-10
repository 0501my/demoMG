import {request, Request, Response} from "express";
import productServices from "../services/productServices";

class HomeController {
    private productServices;

    constructor() {
        this.productServices = productServices;
    }

    showHome = async (req: Request, res: Response) => {
        let product = await productServices.getAll()
        res.render('home', {products: product})
    }
    showFormCreate = async (req: Request, res: Response) => {
        res.render('product/create')
    }
    create = async (req: Request, res: Response) => {
        if (req.files) {
            let image = req.files.image
            if ("mv" in image) {
                await image.mv('./public/storage/' + image.name)
                let product = req.body;
                product.image = '/storage/' + image.name;
                await productServices.save(product)
                res.redirect(301, '/home');
            }
        }
    }
    remove = async (req : Request, res:Response)=>{

    }
}

export default new HomeController();

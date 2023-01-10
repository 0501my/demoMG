import {Product} from "../models/product";


class ProductServices{
    constructor() {
    }
    getAll= async ()=>{
        let products = await Product.find()
        return products;
    }
    save = async (product)=>{
        return "thanh cong"
    }
}
export default new ProductServices();

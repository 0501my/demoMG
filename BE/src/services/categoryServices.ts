import {Category} from "../models/category";
import * as process from "process";
import {AppDataSource} from "../data-source";

class CategoryServices{
    private categoryRepository;
    constructor() {
        this.categoryRepository = AppDataSource.getRepository(Category)
    }
    getAll= async ()=>{
        let categories = await this.categoryRepository.find()

        return categories;
    }

}
export default new CategoryServices();

import homeController from "../controllers/homeController";

import {Router} from "express";
import {auth} from "../middleware/auth";
export const ProductRouter = Router();
ProductRouter.use(auth);
ProductRouter.get('/',homeController.getAll);
ProductRouter.post('/',homeController.create);
ProductRouter.put('/:id',homeController.update);
ProductRouter.delete('/:id',homeController.remove);
ProductRouter.get('/:id',homeController.findById);




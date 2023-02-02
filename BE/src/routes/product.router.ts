import homeController from "../controllers/homeController";

import {Router} from "express";
import {auth} from "../middleware/auth";
import {adminAuth} from "../middleware/adminMiddleware";
export const ProductRouter = Router();
ProductRouter.use(auth);
ProductRouter.get('/',homeController.getAll);
ProductRouter.post('/',adminAuth,homeController.create);
ProductRouter.put('/:id',adminAuth,homeController.update);
ProductRouter.delete('/:id',adminAuth,homeController.remove);
ProductRouter.get('/:id',adminAuth,homeController.findById);




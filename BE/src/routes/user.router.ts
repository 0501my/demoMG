import {Router} from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

export const UserRouter = Router();
// UserRouter.get('/login',userController.showFormLogin);
UserRouter.post('/login',userController.login);


import {Router} from "express";

import userController from "../controllers/userController";

export const UserRouter = Router();
UserRouter.post('/register', userController.register)
UserRouter.post('/login',userController.login);


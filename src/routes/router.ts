import {Router} from "express";
import HomeController from "../controllers/homeController";
import homeController from "../controllers/homeController";
export const router = Router();
router.get('/home', HomeController.showHome);
router.get('/products/create',homeController.showFormCreate);
router.post('/products/create',homeController.create);

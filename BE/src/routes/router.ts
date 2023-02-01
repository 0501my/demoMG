import {Router} from "express";
import {ProductRouter} from "./product.router";
import {UserRouter} from "./user.router";
import {categoryRouter} from "./category.router";
export const router = Router();
router.use('/products',ProductRouter);
router.use('/auth',UserRouter);
router.use('/categories',categoryRouter)



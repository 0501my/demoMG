import {Request, Response} from "express";
import userServices from "../services/UserServices";

class UserController {
    private userServices;

    constructor() {
        this.userServices = userServices;


    }

    register = async (req: Request, res: Response) => {
        let user = await this.userServices.register(req.body);
        res.status(201).json(user)

    }
    login = async (req: Request, res: Response) => {
        let response = await this.userServices.checkUser(req.body)
        res.status(200).json(response)

    }

}


export default new UserController();

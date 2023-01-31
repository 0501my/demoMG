import {request, Request, Response} from "express";
import userServices from "../services/UserServices";

class UserController {
    private userServices;

    constructor() {
        this.userServices = userServices;


    }
    login = async (req: Request, res: Response) => {
        let user = await this.userServices.checkUser(req.body);
        if(user){
           //@ts-ignore
            req.session.User = user;
            res.redirect(301,'/home')
        }else {
            res.redirect(301,'/user/login');

        }

    }
}

export default new UserController();

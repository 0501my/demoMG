import { Request, Response } from "express";
declare class UserController {
    private userServices;
    constructor();
    register: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;

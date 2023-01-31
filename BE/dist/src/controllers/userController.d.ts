import { Request, Response } from "express";
declare class UserController {
    private userServices;
    constructor();
    login: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;

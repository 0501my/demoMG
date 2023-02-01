"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserServices_1 = __importDefault(require("../services/UserServices"));
class UserController {
    constructor() {
        this.register = async (req, res) => {
            let user = await this.userServices.register(req.body);
            res.status(201).json(user);
        };
        this.login = async (req, res) => {
            let response = await this.userServices.checkUser(req.body);
            res.status(200).json(response);
        };
        this.userServices = UserServices_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserServices_1 = __importDefault(require("../services/UserServices"));
class UserController {
    constructor() {
        this.login = async (req, res) => {
            let user = await this.userServices.checkUser(req.body);
            if (user) {
                req.session.User = user;
                res.redirect(301, '/home');
            }
            else {
                res.redirect(301, '/user/login');
            }
        };
        this.userServices = UserServices_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map
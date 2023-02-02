import {User} from "../models/user";
import {AppDataSource} from "../data-source";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {SECRET} from "../middleware/auth";

class UserServices {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }

    register = async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
        return this.userRepository.save(user)

    }

    checkUser = async (user) => {
        let userCheck = await this.userRepository.findOneBy({username: user.username});
        if (!userCheck) {
            return "không tìm thấy người dùng";
        } else {
            let passwordCompare = bcrypt.compare(user.password, userCheck.password);
            if (!passwordCompare) {
                return "Mật khẩu sai"
            } else {
                let payload = {
                    idUser: userCheck.id,
                    username: userCheck.username,
                    role : userCheck.role
                }
                let userRes = {
                    idUser: userCheck.id,
                    username: userCheck.username,
                    role : userCheck.role,
                    token : await jwt.sign(payload, SECRET, {
                        expiresIn: 360000
                })
                }
                console.log(userRes)
                return userRes;
            }
        }

    }
}

export default new UserServices();

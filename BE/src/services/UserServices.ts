import {User} from "../models/user";
import {AppDataSource} from "../data-source";

class UserServices {
    private userRepository;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }


    checkUser = async (user) => {
        let userCheck = await this.userRepository.findOneBy({username: user.username, password: user.password});
        if (!userCheck) {
            return null;
        }
        return userCheck;
    }
}

export default new UserServices();

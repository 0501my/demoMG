declare class UserServices {
    private userRepository;
    constructor();
    register: (user: any) => Promise<any>;
    checkUser: (user: any) => Promise<"không tìm thấy người dùng" | "Mật khẩu sai" | {
        idUser: any;
        username: any;
        role: any;
        token: any;
    }>;
}
declare const _default: UserServices;
export default _default;

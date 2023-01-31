declare class UserServices {
    private userRepository;
    constructor();
    checkUser: (user: any) => Promise<any>;
}
declare const _default: UserServices;
export default _default;

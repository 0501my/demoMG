declare class ProductServices {
    private productRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (product: any) => Promise<any>;
    private update;
    private findById;
    private remove;
}
declare const _default: ProductServices;
export default _default;

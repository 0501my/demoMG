"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = require("./src/routes/router");
const app = (0, express_1.default)();
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const fileUpload = require('express-fileupload');
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect('mongodb://127.0.0.1:27017/demo_dbC09').then(() => {
    console.log('Kết nối mongoose thành công');
}).catch(err => {
    console.log(err.name);
});
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(fileUpload({
    createParentPath: true
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('', router_1.router);
app.use(express_1.default.static('./public'));
app.listen(3000, () => {
    console.log('server is running http://localhost:3000/home');
});
//# sourceMappingURL=index.js.map
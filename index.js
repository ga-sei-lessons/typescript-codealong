"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ts uses import keyword
const express_1 = __importDefault(require("express"));
// config express app
const app = express_1.default();
// port is a union bc process.env
const PORT = 3001;
// confunsing to know what type from packages -- ??
app.get('/', (req, res) => {
    res.send('hello from typescript!');
});
app.listen(PORT, () => {
    console.log(`you are listening to typescript fm on port ${PORT}`);
});

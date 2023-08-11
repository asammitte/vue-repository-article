"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sellers_route_1 = __importDefault(require("@/routes/sellers.route"));
const app = (0, express_1.default)();
const port = 5051;
app.get('/', (req, res) => {
    res.json({ 'message': 'ok' });
});
app.use('/sellers', sellers_route_1.default);
app.listen(port, '0.0.0.0', () => {
    console.log(`[Server]: running at http://localhost:${port}`);
});

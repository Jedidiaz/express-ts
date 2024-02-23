"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mainRoutes_1 = __importDefault(require("./mainRoutes"));
const app = (0, express_1.default)();
//Configuracion de body
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
//Configuracion de cors
app.use((0, cors_1.default)());
//Usamos rutas de Routes
mainRoutes_1.default.forEach(({ url, router }) => {
    app.use("/api" + url, require("./routes/" + router));
});
//Escuchar el puerto
app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});

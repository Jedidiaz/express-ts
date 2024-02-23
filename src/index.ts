import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./mainRoutes";
import { RoutesI } from "./interfaces/routes.interface";

const app: Application = express();

//Configuracion de body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Configuracion de cors
app.use(cors());

//Usamos rutas de Routes
routes.forEach(({ url, router }: RoutesI) => {
  app.use("/api" + url, require("./routes/" + router));
});

//Escuchar el puerto
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

import { Router } from "express";
 //importr apenas o Routers do express
const routes = new Router();

routes.get("/", (req, res) => res.json({ mensagem : "hello world "}));


export default routes;
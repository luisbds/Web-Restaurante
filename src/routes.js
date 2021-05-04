import { Router } from "express";
import UserController from './app/controllers/UserController'
import PratoController from './app/controllers/PratoController'
import DonoController from './app/controllers/DonoController'
 //importr apenas o Routers do express
const routes = new Router();

routes.post('/user', UserController.store);

routes.get('/', (req, res) => res.json({ mensagem: 'Hello Word '}));


export default routes;
import { Router } from "express";
import CategoryController from "./controllers/CategoryController";

const routes = Router();

routes.post('/categorias',CategoryController.create);
routes.get('/categorias',CategoryController.list);
routes.get('/categorias/:id',CategoryController.find);
routes.put('/categorias/:id',CategoryController.update);
routes.delete('/categorias/:id',CategoryController.delete);

export default routes;
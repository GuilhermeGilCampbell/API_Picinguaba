import { Router } from "express";
import CategoryController from "./controllers/CategoryController";

const routes = Router();

routes.post('/categorias',CategoryController.create);
routes.get('/categorias',CategoryController.list);

export default routes;
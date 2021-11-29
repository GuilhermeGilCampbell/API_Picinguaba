import { Router } from "express";
import CategoryController from "./controllers/CategoryController";
import ProductController from "./controllers/ProductController";

const routes = Router();


//Routes for the categories
routes.post('/categorias',CategoryController.create);
routes.get('/categorias',CategoryController.list);
routes.get('/categorias/:id',CategoryController.find);
routes.put('/categorias/:id',CategoryController.update);
routes.delete('/categorias/:id',CategoryController.delete);

//Routes for the product
routes.post('/produto',ProductController.create);


export default routes;
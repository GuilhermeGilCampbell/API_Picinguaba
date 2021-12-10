import { Router } from "express";
import ProductController from "./controllers/ProductController";
import CategoryController from "./controllers/CategoryController";
import ContactController from "./controllers/ContactController";

const routes = Router();

//Routes produtos
routes.post("/produtos", ProductController.create);
routes.get("/produtos", ProductController.list);
routes.get("/produtos/:id", ProductController.find);
routes.get("/produtos/categoria/:id", ProductController.findCategory);
routes.put("/produtos/:id", ProductController.update);
routes.delete("/produtos/:id", ProductController.delete);

//Routes categorias
routes.post("/categorias", CategoryController.create);
routes.get("/categorias", CategoryController.list);
routes.get("/categorias/:id", CategoryController.find);
routes.put("/categorias/:id", CategoryController.update);
routes.delete("/categorias/:id", CategoryController.delete);

//Routes contatos
routes.post("/images", ContactController.create);
routes.get("/images", ContactController.list);
routes.get("/images/:id", ContactController.find);
routes.put("/images/:id", ContactController.update);
routes.delete("/images/:id", ContactController.delete);


export default routes;
import { Router } from "express";
import ProductController from "./controllers/ProductController";
import CategoryController from "./controllers/CategoryController";
import ContactController from "./controllers/ContactController";
import ImagesController from "./controllers/ImagesController";

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

//Routes images
routes.post("/images", ImagesController.create);
routes.get("/images", ImagesController.list);
routes.get("/images/:id", ImagesController.find);
routes.put("/images/:id", ImagesController.update);
routes.delete("/images/:id", ImagesController.delete);

export default routes;
import DefaultDataController from "../controllers/DefaultDataController";

import * as categorias from './DefaultData/categorias.json'
import * as produtos from './DefaultData/produtos.json'

DefaultDataController.insertCategories(categorias.data);
DefaultDataController.insertProducts(produtos.data);

import { Router } from "express";
import { getCategories } from "../controllers/categoria";
import { getCompanies } from "../controllers/empresas";
import { getProductCategory, getProductsTopAndCategories } from "../controllers/producto";

const categories = Router();

categories.get("/obtener-categorias", getCategories);
categories.get("/:idCategoria/empresas/obtener-empresas", getCompanies);
categories.get("/:idCategoria/empresas/:idEmpresa/productos-top-categoria", getProductsTopAndCategories);
categories.get("/:idCategoria/empresas/:idEmpresa/productos/:categoriaProducto", getProductCategory);

export default categories;


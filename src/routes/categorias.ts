import { Router } from "express";
import { getCategories } from "../controllers/categoria";
import { getCompaniesByCategory, getAllCompanies, registrarEmpresa, getAllCompaniesFullData } from "../controllers/empresas";
import { getProductCategory, getProductsTopAndCategories, obtenerProductosDeEmpresa, registrarProducto } from "../controllers/producto";

const categories = Router();

// Categoria
categories.get("/obtener-categorias", getCategories);

// Empresas
categories.post("/empresas/agregar-empresa", registrarEmpresa)
categories.get("/empresas/obtener-empresas", getAllCompanies);
categories.get("/empresas/obtener-empresas-completas", getAllCompaniesFullData);
categories.get("/:idCategoria/empresas/obtener-empresas", getCompaniesByCategory);

// Productos
categories.post("/productos/agregar-producto", registrarProducto)
categories.get("/:idCategoria/empresas/:idEmpresa/productos-top-categoria", getProductsTopAndCategories);
categories.get("/:idCategoria/empresas/:idEmpresa/productos/:categoriaProducto", getProductCategory);
categories.get("/:idEmpresa/productos", obtenerProductosDeEmpresa);

export default categories;


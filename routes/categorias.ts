import { Router } from "express";
import { getCategories } from "../controllers/categoria";
import { getCompanies } from "../controllers/empresas";

const categories = Router();

categories.get("/obtener-categorias", getCategories);
categories.get("/:idCategoria/empresas/obtener-empresas", getCompanies);

export default categories;


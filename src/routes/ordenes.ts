import { Router } from "express";
import { agregarOrden, obtenerOrdenes } from "../controllers/ordenes";

const ordenes = Router();

ordenes.post("/agregar-orden", agregarOrden);
ordenes.get("/obtener-ordenes", obtenerOrdenes);

export default ordenes
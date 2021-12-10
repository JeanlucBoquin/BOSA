import { Router } from 'express';
import * as controllers from '../controllers/ordenes';

const ordenes = Router();

ordenes.get('/obtener-ordenes', controllers.obtenerOrdenes);
ordenes.get('/pendientes/:id', controllers.ordenesPendientes);
ordenes.get('/entregadas/:id', controllers.ordenesEntregadas);
ordenes.put('/:idOrden/:idMotorista', controllers.actualizarOrden);
ordenes.put('/:idOrden', controllers.actualizarRecorrido);
ordenes.post('/agregar-orden', controllers.agregarOrden);
export default ordenes;
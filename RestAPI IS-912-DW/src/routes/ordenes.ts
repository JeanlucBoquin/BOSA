import { Router } from 'express';
import { getBikers } from '../controllers/motoristas';
import * as controllers from '../controllers/ordenes';
import { getProductId } from '../controllers/producto';

const ordenes = Router();

ordenes.get('/obtener-ordenes', controllers.obtenerOrdenes);
ordenes.get('/pendientes/:id', controllers.ordenesPendientes);
ordenes.get('/entregadas/:id', controllers.ordenesEntregadas);
ordenes.get('/producto/:id', getProductId);
ordenes.get('/details/:id', controllers.detalleOrden);
ordenes.put('/:idOrden/:idMotorista', controllers.actualizarOrden);
ordenes.put('/:idOrden', controllers.actualizarRecorrido);
ordenes.post('/agregar-orden', controllers.agregarOrden);
export default ordenes;
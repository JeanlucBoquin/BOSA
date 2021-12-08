import { Router } from 'express';
import { login, register, establecerEmpresasFavoritas, establecerProductosFavoritos, obtenerEmpresasFavoritas, obtenerProductosFavoritos } from '../controllers/cliente';

const clienteRouter = Router();

clienteRouter.post('/login', login);
clienteRouter.post('/register', register);
clienteRouter.put('/empresas-favoritas', establecerEmpresasFavoritas);
clienteRouter.put('/productos-favoritos', establecerProductosFavoritos);
clienteRouter.get('/:idCliente/empresas-favoritas', obtenerEmpresasFavoritas);
clienteRouter.get('/:idCliente/productos-favoritos', obtenerProductosFavoritos);

export default clienteRouter;
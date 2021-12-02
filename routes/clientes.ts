import { Router } from 'express';
import { login, register } from '../controllers/cliente';

const clienteRouter = Router();

clienteRouter.post('/login', login);
clienteRouter.post('/register', register);

export default clienteRouter;
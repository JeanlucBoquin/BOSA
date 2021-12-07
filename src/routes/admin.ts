import { Router } from 'express';
import * as controllers from '../controllers/admin'
import { verifyToken } from '../middlewares';
const adminRouter = Router();

// Registro
adminRouter.post('/signup', controllers.signUp);

// Login
adminRouter.post('/signin', controllers.signIn);

// Motoristas
adminRouter.get('/motoristas/lista', verifyToken, controllers.getBikers);
export default adminRouter;
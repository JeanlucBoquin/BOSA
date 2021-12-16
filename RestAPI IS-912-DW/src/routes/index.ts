import {Router} from 'express';
import motoristasRouter from './motoristas';
import clienteRouter from './clientes';
import categories from './categorias';
import ordenes from './ordenes';
import adminRouter from './admin';
import imageRouter from './images';

const index = Router();

index.use('/motoristas', motoristasRouter);
index.use('/cliente', clienteRouter);
index.use('/categorias', categories);
index.use('/ordenes', ordenes);

index.use('/images', imageRouter);
index.use('/admin', adminRouter);
export default index;
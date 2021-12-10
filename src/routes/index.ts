<<<<<<< HEAD
import {Router} from 'express';
import motoristasRouter from './motoristas';
import clienteRouter from './clientes';
import categories from './categorias';
import ordenes from './ordenes';
=======
import { Router } from 'express';
import adminRouter from './admin';
import imageRouter from './images';
import motoristasRouter from './motoristas';
>>>>>>> nelsinho_dev

const index = Router();

index.use('/motoristas', motoristasRouter);
<<<<<<< HEAD
index.use('/cliente', clienteRouter);
index.use('/categorias', categories);
index.use('/ordenes', ordenes);

=======
index.use('/images', imageRouter);
index.use('/admin', adminRouter);
>>>>>>> nelsinho_dev
export default index;
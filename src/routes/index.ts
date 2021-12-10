import {Router} from 'express';
import motoristasRouter from './motoristas';
import clienteRouter from './clientes';
import categories from './categorias';
import ordenes from './ordenes';

const index = Router();

index.use('/motoristas', motoristasRouter);
index.use('/cliente', clienteRouter);
index.use('/categorias', categories);
index.use('/ordenes', ordenes);

export default index;
import {Router} from 'express';
import motoristasRouter from './motoristas';
import clienteRouter from './clientes';
import categories from './categorias';
// import empresas from './empresas';

const index = Router();

index.use('/motoristas', motoristasRouter);
index.use('/cliente', clienteRouter);
index.use('/categorias', categories);
// index.use('/categorias/:idCategoria/empresas', empresas);

export default index;
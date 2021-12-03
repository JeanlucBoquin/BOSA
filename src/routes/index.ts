import {Router} from 'express';
import motoristasRouter from './motoristas';

const index = Router();

index.use('/motoristas', motoristasRouter);


export default index;
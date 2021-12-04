import {Router} from 'express';
import imageRouter from './images';
import motoristasRouter from './motoristas';

const index = Router();

index.use('/motoristas', motoristasRouter);
index.use('/images', imageRouter);

export default index;
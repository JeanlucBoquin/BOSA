import { Router } from 'express';
import adminRouter from './admin';
import imageRouter from './images';
import motoristasRouter from './motoristas';

const index = Router();

index.use('/motoristas', motoristasRouter);
index.use('/images', imageRouter);
index.use('/admin', adminRouter);
export default index;
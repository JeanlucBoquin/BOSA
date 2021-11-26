import {Router} from 'express';
import { getMotoristas } from '../controllers/motoristas';

const motoristasRouter = Router();

motoristasRouter.get('/list', getMotoristas);

export default motoristasRouter;
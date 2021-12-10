import {Router} from 'express';
import { getMotoristas, newMotorista } from '../controllers/motoristas';

const motoristasRouter = Router();

motoristasRouter.get('/list', getMotoristas);
motoristasRouter.post('/new', newMotorista);

export default motoristasRouter;
import {Router} from 'express';
import * as ctrl from '../controllers/motoristas';

const motoristasRouter = Router();

motoristasRouter.post('/signin', ctrl.signIn);
motoristasRouter.post('/signup', ctrl.signUp);
export default motoristasRouter;
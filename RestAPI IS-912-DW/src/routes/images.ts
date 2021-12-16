import {Router} from 'express';
import { imgAdd } from '../controllers/images';

const imageRouter = Router();

imageRouter.post('/add', imgAdd);

export default imageRouter;
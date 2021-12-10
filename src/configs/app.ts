import express from 'express';
import cors from 'cors';   
import routes from '../routes/index';
import morgan from 'morgan';
import dotenv from 'dotenv';

import './database';
dotenv.config();

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api',routes);

export default app;
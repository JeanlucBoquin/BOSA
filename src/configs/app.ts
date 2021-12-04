import express from 'express';
import cors from 'cors';   
import routes from '../routes/index';
import morgan from 'morgan';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';

import './database';
dotenv.config();

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../public/uploads'),
    filename: (req, file, cb) => {
        const date = new Date();
        cb(null, date.getTime() + path.extname(file.originalname) );
    }
});

app.use(multer({storage}).single('image'));
app.use('/api',routes);

export default app;
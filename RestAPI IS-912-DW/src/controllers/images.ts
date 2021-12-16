import { Request, Response } from 'express';
import { Img } from '../models/images';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs-extra';

cloudinary.config({
    cloud_name: 'bossa',
    api_key: '538481649319749',
    api_secret: 'ZkwcrYD2xwRLKIGsGQHzovymq3o'
});


export const imgAdd = async (req: Request, res: Response) => {
    const pathImg: string = req.file?.path!;
    const originalName: string = req.file?.originalname!;

    try {
        const result = await cloudinary.uploader.upload(pathImg);
        const image = new Img({
            descripcion: '',
            imageUrl: result.url,
            public_id: result.public_id,
            titulo: originalName
        });
        await image.save();
        await fs.unlink(pathImg);
        res.send('funciona');
    } catch (error) {
        res.send({ error });
    }
};
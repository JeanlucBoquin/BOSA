import { Schema, model } from 'mongoose';
import { IImage } from '../interfaces/image';

const ImageSchema = new Schema<IImage>({
    titulo: { type: 'string', required: true },
    imageUrl: { type: 'string', required: true },
    public_id: { type: 'string'}
},{ timestamps: true, versionKey: false});

export const Img = model<IImage>('Image', ImageSchema);
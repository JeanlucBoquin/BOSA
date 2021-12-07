import { Schema, model, Model } from 'mongoose';
import { IMotorista } from '../interfaces/motorista';
import bcrypt from 'bcryptjs';

interface MotoristaModel extends Model<IMotorista> {
    encryptPassword(password: string): string;
    comparePassword(password: string, recievedPassword: string): boolean;
}

const motoristaSchema = new Schema<IMotorista, MotoristaModel>({
    nombre: { type: 'string', required: true },
    apellido: { type: 'string', required: true },
    correo: { type: 'string', unique: true, required: true },
    password: { type: 'string', required: true },
    telefono: { type: 'string', unique: true, required: true },
    estado: {type: 'string', required: true, default: 'pendiente'}
}, { timestamps: true, versionKey: false });


// Encriptar contraseña
motoristaSchema.static('encryptPassword', async (password: string) => {
    try {
        const salt = await bcrypt.genSalt();
        return await bcrypt.hash(password, salt);
    } catch (error) {
        console.log('error', error);
    }
});

// Comparar contra
motoristaSchema.static('comparePassword', async (password: string, recievedPassword: string) => {
    return await bcrypt.compare(password, recievedPassword);
});


export const Motorista = model<IMotorista, MotoristaModel>('Motorista', motoristaSchema);

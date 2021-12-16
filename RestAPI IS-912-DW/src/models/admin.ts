import { Model, model, Schema } from 'mongoose';
import { IAdmin } from '../interfaces/admin';
import bcrypt from 'bcryptjs';

interface AdminModel extends Model<IAdmin> {
    encryptPassword(password: string): string;
    comparePassword(password: string, recievedPassword: string): boolean;
}

const adminSchema = new Schema<IAdmin, AdminModel>({
    apellido: { type: 'string', required: true },
    correo: { type: 'string', required: true , unique: true },
    nombre: { type: 'string', required: true },
    password: { type: 'string', required: true},
    rol: { type: 'string', default: 'admin' },
}, { timestamps: true, versionKey: false });


// Encriptar contraseña
adminSchema.static('encryptPassword', async (password: string) => {
    try {
        const salt = await bcrypt.genSalt();
        return await bcrypt.hash(password, salt);
    } catch (error) {
        console.log('error', error);
    }
});

// Comparar contra
adminSchema.static('comparePassword', async (password: string, recievedPassword: string) => {
    return await bcrypt.compare(password, recievedPassword);
});

export const Admins = model<IAdmin, AdminModel>('Admins', adminSchema);


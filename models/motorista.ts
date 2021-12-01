import { Schema, model } from 'mongoose';
// Paso 1 Inerface
import { IMotorista } from '../interfaces/motorista';

// Paso 2 Schema
const motoristaSchema = new Schema<IMotorista>({
    nombre: { type: 'string', required: true },
    apellido: { type: 'string', required: true },
    correo: { type: 'string', unique: true, required: true },
    password: { type: 'string', required: true },
    telefono: { type: 'string', unique: true, required: true }
}, { timestamps: true, versionKey: false });

// Paso 3 Modelo
export const Motorista = model<IMotorista>('Motorista', motoristaSchema);

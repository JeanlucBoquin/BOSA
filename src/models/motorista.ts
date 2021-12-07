
import { Schema, model } from 'mongoose';

// Paso 1 Interface
interface Motorista {
    nombre: string;
    cell: string;
}

// Paso 2 Schema
const motoristaSchema = new Schema<Motorista>({
    nombre : {type: 'string', required: true},
    cell: {type: 'string', required: true}
},{timestamps: true});

// Paso 3 Modelo
export const Motorista = model<Motorista>('Motorista', motoristaSchema);

import { Schema, model, Date } from 'mongoose';

// Paso 1 Interface
interface ICliente {
    nombre: string,
    apellido: string,
    correo: string,
    contraseña: string,
    fecha: Date

}

// Paso 2 Schema
const clienteSchema = new Schema<ICliente>({
    nombre: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: true
    },
    correo: {
        type: String,
        require: true
    },
    contraseña: {
        type: String,
        require: true
    },
    fecha: Date 

})

// Paso 3 exportar Modelo
export const Cliente = model<ICliente>('clientes', clienteSchema);
import { Schema, model, Date, Types } from 'mongoose';

// Paso 1 Interface
interface ICliente {
    nombre: string,
    apellido: string,
    correo: string,
    contraseña: string,
    fecha: Date,
    empresas_favoritas: Types.ObjectId[]
    productos_favoritos: Types.ObjectId[]
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
    fecha: Date,
    empresas_favoritas: [Schema.Types.ObjectId],
    productos_favoritos: [Schema.Types.ObjectId]
})

// Paso 3 exportar Modelo
export const Cliente = model<ICliente>('clientes', clienteSchema);
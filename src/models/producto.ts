import { Schema, model, Types } from "mongoose";

interface IProducto {
    idEmpresa: Types.ObjectId;
    nombre: string;
    descripcion: string;
    pathImg: string;
    categoria: string;
    precio: number;
    ventas: number;
    disponibles: number;
    calificacion: number;
}

const productoSchema = new Schema<IProducto>({
    idEmpresa: {
        type: Schema.Types.ObjectId,
        // ref:"empresas"
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    pathImg: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    ventas: {
        type: Number,
        required: true
    },
    disponibles: {
        type: Number,
        required: true
    },
    calificacion: {
        type: Number,
        required: true
    }
})

export default model<IProducto>("productos", productoSchema)
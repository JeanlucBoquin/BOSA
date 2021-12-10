import { Schema, model, Types } from "mongoose";

interface IEmpresa {
    idCategoria: Types.ObjectId;
    nombre: string;
    descripcion: string;
    pathImg: string;
    calificacion: number;
}

const empresaSchema = new Schema<IEmpresa>({
    idCategoria: {
        type: Schema.Types.ObjectId,
        // ref:"categorias",
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
    calificacion: {
        type: Number,
        required: true
    }
})

export default model<IEmpresa>("empresas", empresaSchema)
import { Schema, model } from "mongoose";

interface ICategoria {
    nombre: string;
    descripcion: string;
    pathImg: string;
}

const categoriaSchema = new Schema({
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
    }
})

export default model<ICategoria>("categorias", categoriaSchema)
import { Schema, model, Types } from "mongoose";

interface IOrden {
    idCliente: Types.ObjectId;
    idMotorista: Types.ObjectId;
    productos: Producto[];
    datosTarjeta: DatosTarjeta;
    lnglat: Lnglat;
    direccion:string;
    estadoOrden: string;
    estadoRecorrido: string;
}

interface DatosTarjeta {
    tarjeta: string;
    cvv: string;
}

interface Lnglat {
    lng: number;
    lat: number;
}

interface Producto {
    idProduct: Types.ObjectId;
    idCompany: Types.ObjectId;
    cantidad: number;
}

const OrdenSchema = new Schema<IOrden>({
    idCliente: {
        type: Schema.Types.ObjectId,
        ref: 'clientes',
        required: true
    },
    direccion:{
        type:String,
        required:true
    },
    idMotorista: {
        type: Schema.Types.ObjectId
    },
    estadoOrden: {
        type:String,
        default:"disponible"
    },
    estadoRecorrido: {
        type:String,
        default:""
    },
    productos: Schema.Types.Array,
    datosTarjeta: Object,
    lnglat: Object,
})

export default model<IOrden>("ordenes", OrdenSchema)
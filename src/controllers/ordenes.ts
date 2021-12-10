import { Request, Response } from "express";
import Orden from "../models/orden";
import Producto from "../models/producto"

interface ProductoOrdenado {
    idProduct: string;
    idCompany: string;
    cantidad: number;

}

const agregarOrden = async (req: Request, res: Response) => {
    const datos = req.body;
    const { productos } = req.body
    try {
        productos.forEach(async (dataProducto: ProductoOrdenado) => {
            await Producto.updateOne(
                { _id: dataProducto.idProduct },
                {
                    $inc: {
                        disponibles:-dataProducto.cantidad
                    }
                }
            );
        });
        const nuevaOrden = new Orden(datos);
        await nuevaOrden.save()
        res.status(200).json({
            ok: true,
            msg: "La orden se agrego con exito"
        })
    } catch (error) {
        triggerCarch(error, res, "Error al agregar la orden")
    }
}

const obtenerOrdenes = async (req: Request, res: Response) => {
    try {
        const ordenes = await Orden.find({estadoOrden:"disponible"})
        res.status(200).json({
            ok: true,
            ordenes
        })
    } catch (error) {
        triggerCarch(error, res, "Error al obtener las ordenes")
    }
}

function triggerCarch(error: any, res: Response, msg: string) {
    console.log(error);
    res.status(500).json({
        ok: false,
        msg: `Por favor contáctese con el administrador: ${msg}`
    })
}

export { agregarOrden, obtenerOrdenes }
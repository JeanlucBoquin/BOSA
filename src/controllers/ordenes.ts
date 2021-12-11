import { Request, Response } from "express";
import mongoose from 'mongoose';
import Orden from "../models/orden";
import Producto from "../models/producto"

interface ProductoOrdenado {
    idProduct: string;
    idCompany: string;
    cantidad: number;

}

export const agregarOrden = async (req: Request, res: Response) => {
    const datos = req.body;
    const { productos } = req.body
    try {
        productos.forEach(async (dataProducto: ProductoOrdenado) => {
            await Producto.updateOne(
                { _id: dataProducto.idProduct },
                {
                    $inc: {
                        disponibles: -dataProducto.cantidad
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

export const detalleOrden = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const orden = await Orden.findOne({ _id: id }).populate('idCliente');
        res.status(200).json({ orden });
    } catch (error) {
        triggerCarch(error, res, "Error al obtener detalle");
    }
}

export const obtenerOrdenes = async (req: Request, res: Response) => {
    try {
        const ordenes = await Orden.find({ estadoOrden: "disponible" }).populate('idCliente');
        res.status(200).json({
            ok: true,
            ordenes
        })
    } catch (error) {
        triggerCarch(error, res, "Error al obtener las ordenes")
    }
}

export const ordenesPendientes = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const ordenes = await Orden.find({ idMotorista: id, estadoOrden: 'pendiente' });
        res.status(200).json({ ordenes });
    } catch (error) {
        triggerCarch(error, res, 'Error al obtener las ordenes pendientes');
    }
}
export const ordenesEntregadas = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const ordenes = await Orden.find({ idMotorista: id, estadoOrden: 'entregada' });
        res.status(200).json({ ordenes });
    } catch (error) {
        triggerCarch(error, res, 'Error al obtener las ordenes pendientes');
    }
}
export const actualizarOrden = async (req: Request, res: Response) => {
    const { idOrden, idMotorista } = req.params;
    const { estadoOrden, } = req.body;

    try {
        await Orden.findByIdAndUpdate(idOrden, { estadoOrden, idMotorista });
        res.status(200).json({ ok: 'true' })
    } catch (error) {
        triggerCarch(error, res, 'Error al actualizar estado de la orden');
    }
}

export const actualizarRecorrido = async (req: Request, res: Response) => {
    const { idOrden } = req.params;
    const { estadoRecorrido, estadoOrden } = req.body;
    try {
        if (estadoOrden !== undefined) {
            await Orden.findByIdAndUpdate(idOrden, { estadoRecorrido, estadoOrden });

        } else {
            await Orden.findByIdAndUpdate(idOrden, { estadoRecorrido });
        }
        res.status(200).json({ ok: 'true' });
    } catch (error) {
        triggerCarch(error, res, 'Error al actualizar estado de la orden');
    }
}


function triggerCarch(error: any, res: Response, msg: string) {
    console.log(error);
    res.status(500).json({
        ok: false,
        msg: `Por favor contáctese con el administrador: ${msg}`
    })
}

import { Request, Response } from "express";
// import Empresa from "../models/empresa"
import Producto from "../models/producto";
import { Types } from 'mongoose';

const getProducts = async (req: Request, res: Response) => {
    const { idEmpresa } = req.params;
    // const transIDtypeMongo =  new Types.ObjectId(idEmpresa)
    // Tarea para mañana aplicar limit, solo devolver los tres mas vendidos
    // y al especificar la categoria mostrar los otros productos (Esto en otro controlador)
    try {
        const productos = await Producto.aggregate([
            {
                $match: {
                    idEmpresa: new Types.ObjectId(idEmpresa)
                }
            },
            {
                $lookup: {
                    from: "empresas",
                    localField: "idEmpresa",
                    foreignField: "_id",
                    as: "idEmpresa"
                }
            },
            {
                $project: {
                    nombre: true,
                    descripcion: true,
                    pathImg: true,
                    categoria: true,
                    precio: true,
                    calificacion: true,
                    ventas: true,
                    disponibles: true,
                    empresa: { $arrayElemAt: ["$idEmpresa.nombre", 0] }
                }
            }
        ])
        // const productos = await Producto.find({idEmpresa}, {});
        res.status(200).json({
            ok: true,
            productos
        });
    } catch (error) {
        triggerCarch(error, res, "Error en la peticion de obtener productos")
    }
}

function triggerCarch(error: any, res: Response, msg: string) {
    console.log(error);
    res.status(500).json({
        ok: false,
        msg: `Por favor contáctese con el administrador: ${msg}`
    })
}

export { getProducts }

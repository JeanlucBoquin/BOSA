import { Request, Response } from "express";
import Empresa from "../models/empresa"
import Producto from "../models/producto";
import { Types } from 'mongoose';

const getProductsTopAndCategories = async (req: Request, res: Response) => {
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
            // {
            //     $lookup: {
            //         from: "empresas",
            //         localField: "idEmpresa",
            //         foreignField: "_id",
            //         as: "idEmpresa"
            //     }
            // },
            // {
            //     $project: {
            //         nombre: true,
            //         descripcion: true,
            //         pathImg: true,
            //         categoria: true,
            //         precio: true,
            //         calificacion: true,
            //         ventas: true,
            //         disponibles: true,
            //         empresa: { $arrayElemAt: ["$idEmpresa.nombre", 0] },
            //         pathImgEmpresa:  { $arrayElemAt: ["$idEmpresa.pathImg", 0] }
            //     }
            // },
            {
                $sort: {
                    ventas: -1
                }
            },
            {
                $limit: 5
            }
        ])
        const categotiasProducto = await Producto.aggregate([
            {
                $match: {
                    idEmpresa: new Types.ObjectId(idEmpresa)
                }
            },
            {
                $group: {
                    _id: "$categoria",
                }
            }
        ])
        const datosEmpresa = await Empresa.find({ _id: idEmpresa }, "nombre pathImg");
        res.status(200).json({
            ok: true,
            nombreEmpresa: datosEmpresa[0].nombre,
            imgEmpresa: datosEmpresa[0].pathImg,
            categotiasProducto,
            productos
        });
    } catch (error) {
        triggerCarch(error, res, "Error en la peticion de obtener productos")
    }
}

const getProductCategory = () => { }
function triggerCarch(error: any, res: Response, msg: string) {
    console.log(error);
    res.status(500).json({
        ok: false,
        msg: `Por favor contáctese con el administrador: ${msg}`
    })
}

export { getProductsTopAndCategories, getProductCategory}

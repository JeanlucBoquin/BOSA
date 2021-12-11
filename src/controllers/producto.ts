import { Request, Response } from "express";
import Empresa from "../models/empresa"
import Producto from "../models/producto";
import { Types } from 'mongoose';

const registrarProducto = async (req: Request, res: Response) => {
    // const { idEmpresa } = req.params;
    const data = req.body;
    try {
        if(data.nombre){
            const nuevoProducto = new Producto(data);
            await nuevoProducto.save()
            return res.status(200).json({
                ok:true,
                msg:"El producto se agrego de forma exitosa"
            })
        }
        return res.status(200).json({
            ok:false,
            msg:"No se pudo agregar el producto"
        })
    } catch (error) {
        triggerCarch(error, res, "Error al registrar el producto")
    }
}

const getProductsTopAndCategories = async (req: Request, res: Response) => {
    const { idEmpresa } = req.params;
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
        triggerCarch(error, res, "Error en la peticion de obtener productos");
    }
}

const getProductCategory = async (req: Request, res: Response) => {
    const { idEmpresa, categoriaProducto } = req.params;
    try {
        const productos = await Producto.find({ idEmpresa, categoria: categoriaProducto }, {});
        // console.log(productos)
        res.status(200).json({
            ok: true,
            productos
        })
    } catch (error) {
        triggerCarch(error, res, "Error en la peticion de obtener productos por su categoria")
    }
}

const obtenerProductosDeEmpresa = async (req: Request, res: Response) => {
    const { idEmpresa } = req.params;
    try {
        const productos = await Producto.find({ idEmpresa }, {});
        // console.log(productos)
        res.status(200).json({
            ok: true,
            productos
        })
    } catch (error) {
        triggerCarch(error, res, "Error en la peticion de obtener productos por su categoria")
    }
}

const getProductId = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const producto = await Producto.findOne({_id: id});
        res.status(200).json({producto});
    } catch (error) {
        triggerCarch(error, res, 'Error en la peticion de obtener producto');
    }
}

function triggerCarch(error: any, res: Response, msg: string) {
    console.log(error);
    res.status(500).json({
        ok: false,
        msg: `Por favor contáctese con el administrador: ${msg}`
    })
}


export {
    getProductsTopAndCategories,
    getProductCategory,
    registrarProducto,
    obtenerProductosDeEmpresa,
    getProductId
}

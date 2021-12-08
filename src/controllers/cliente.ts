import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { Cliente } from "../models/cliente";

const login = async (req: Request, res: Response) => {
    const { email, contraseña } = req.body
    try {
        const userLogin = await Cliente.findOne({ correo: email, contraseña }, {});;
        if (!userLogin) {
            res.status(200).json({
                ok: false,
                msg: "Una de las credenciales se ingreso de forma incorrecta, o no se encuentra registrada"
            });;
        }
        res.status(200).json({
            ok: true,
            userLogin
        });;
    } catch (error) {
        triggerCarch(error, res, "Error en la peticion de ingreso")
    }
}

const register = async (req: Request, res: Response) => {
    const data = req.body;
    data["fecha"] = new Date();
    try {
        const newUser = new Cliente(data);
        await newUser.save();
        res.status(200).json({
            ok: true,
            msg: "Usuario registrado con exito"
        });;
    } catch (error) {
        triggerCarch(error, res, "Error al registrarse")
    }
}

const establecerEmpresasFavoritas = async (req: Request, res: Response) => {
    const { idCliente, idEmpresa, favorito } = req.body
    try {
        if (favorito) {
            const empresasFavoritas = await Cliente.updateOne(
                { _id: new Types.ObjectId(idCliente) },
                {
                    $addToSet: {
                        empresas_favoritas: idEmpresa
                    }
                });
            res.status(200).json({
                ok: true,
                idCliente,
                msg: "empresa agregado con exito"
            });
        } else {
            const empresasFavoritas = await Cliente.updateOne(
                { _id: new Types.ObjectId(idCliente) },
                {
                    $pull: {
                        empresas_favoritas: idEmpresa
                    }
                });
            res.status(200).json({
                ok: true,
                idCliente,
                msg: "empresa removida con exito"
            });
        }
    } catch (error) {
        triggerCarch(error, res, "Error al establecer la empresa favorita")
    }
}
const establecerProductosFavoritos = async (req: Request, res: Response) => {
    const { idCliente, idProducto, favorito } = req.body
    try {
        if (favorito) {
            await Cliente.updateOne(
                { _id: new Types.ObjectId(idCliente) },
                {
                    $addToSet: {
                        productos_favoritos: idProducto
                    }
                });
            res.status(200).json({
                ok: true,
                // idCliente,
                msg: "producto agregado con exito"
            });
        } else {
            await Cliente.updateOne(
                { _id: new Types.ObjectId(idCliente) },
                {
                    $pull: {
                        productos_favoritos: idProducto
                    }
                });
            res.status(200).json({
                ok: true,
                // idCliente,
                msg: "producto removido con exito"
            });
        }
    } catch (error) {
        triggerCarch(error, res, "Error al establecer el producto favorito")
    }
}

const obtenerEmpresasFavoritas = async (req: Request, res: Response) => {
    const { idCliente } = req.params;
    try {
        const empresasFavoritas = await Cliente.aggregate([
            {
                $match: {
                    _id: new Types.ObjectId(idCliente)
                }
            },
            {
                $lookup: {
                    from: "empresas",
                    localField: "empresas_favoritas",
                    foreignField: "_id",
                    as: "empresas_favoritas"
                }
            },
            {
                $unwind: "$empresas_favoritas"
            },
            {
                $project: {
                    _id: "$empresas_favoritas._id",
                    idCategoria: "$empresas_favoritas.idCategoria",
                    nombre: "$empresas_favoritas.nombre",
                    descripcion: "$empresas_favoritas.descripcion",
                    pathImg: "$empresas_favoritas.pathImg",
                    calificacion: "$empresas_favoritas.calificacion"
                }
            }
        ]);
        res.status(200).json({
            ok: true,
            // idCliente,
            empresasFavoritas
        });
    } catch (error) {
        triggerCarch(error, res, "Error al obtener las empresas favoritos")
    }
}

const obtenerProductosFavoritos = async (req: Request, res: Response) => {
    const { idCliente } = req.params;
    try {
        const productosFavoritos = await Cliente.aggregate([
            {
                $match: {
                    _id: new Types.ObjectId(idCliente)
                }
            },
            {
                $lookup: {
                    from: "productos",
                    localField: "productos_favoritos",
                    foreignField: "_id",
                    as: "productos_favoritos"
                }
            },
            {
                $unwind: "$productos_favoritos"
            },
            {
                $project: {
                    _id: "$productos_favoritos._id",
                    idEmpresa: "$productos_favoritos.idEmpresa",
                    nombre: "$productos_favoritos.nombre",
                    descripcion: "$productos_favoritos.descripcion",
                    pathImg: "$productos_favoritos.pathImg",
                    categoria: "$productos_favoritos.categoria",
                    precio: "$productos_favoritos.precio",
                    calificacion: "$productos_favoritos.calificacion",
                    ventas: "$productos_favoritos.ventas",
                    disponibles: "$productos_favoritos.disponibles"
                }
            }
        ]);
        res.status(200).json({
            ok: true,
            // idCliente,
            productosFavoritos
        });
    } catch (error) {
        triggerCarch(error, res, "Error al obtener los productos favoritos")
    }
}

function triggerCarch(error: any, res: Response, msg: string) {
    console.log(error);
    res.status(500).json({
        ok: false,
        msg: `Por favor contáctese con el administrador: ${msg}`
    });
}

export {
    login,
    register,
    establecerEmpresasFavoritas,
    establecerProductosFavoritos,
    obtenerEmpresasFavoritas,
    obtenerProductosFavoritos
}
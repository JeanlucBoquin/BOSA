import { Request, Response } from "express";
import Categoria from "../models/categoria";

const getCategories = async(req: Request, res: Response) => {
    const categorias = await Categoria.find({},{});
    try {
        res.status(200).json({
            ok:true,
            categorias
        })
    } catch (error) {
        triggerCarch(error, res, "Error en la peticion de categorias")
    }
}

function triggerCarch(error: any, res: Response, msg: string) {
    console.log(error);
    res.status(500).json({
        ok: false,
        msg: `Por favor contáctese con el administrador: ${msg}`
    })
}

export { getCategories }
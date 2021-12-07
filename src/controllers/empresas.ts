import { Request, Response } from "express";
import Empresa from "../models/empresa";

const getCompanies = async (req: Request, res: Response) => {
    const { idCategoria } = req.params;
    try {
        const empresas = await Empresa.find({idCategoria}, {});
        res.status(200).json({
            ok: true,
            empresas
        });
    } catch (error) {
        triggerCarch(error, res, "Error en la peticion de obtener empresas")
    }
}

function triggerCarch(error: any, res: Response, msg: string) {
    console.log(error);
    res.status(500).json({
        ok: false,
        msg: `Por favor contáctese con el administrador: ${msg}`
    })
}

export { getCompanies }

import { Request, Response } from "express";
import Empresa from "../models/empresa";

const registrarEmpresa = async (req: Request, res: Response) => {
    const data = req.body;
    try {
        const nuevaEmpresa = new Empresa(data);
        await nuevaEmpresa.save();
        res.status(200).json({
            ok:true,
            nuevaEmpresa
        })
    } catch (error) {
        triggerCarch(error, res, "Error al registrar una nueva empresa")
    }
}

const getCompaniesByCategory = async (req: Request, res: Response) => {
    const { idCategoria } = req.params;
    try {
        const empresas = await Empresa.find({ idCategoria }, {});
        res.status(200).json({
            ok: true,
            empresas
        });
    } catch (error) {
        triggerCarch(error, res, "Error en la peticion de obtener empresas");
    }
}
const getAllCompanies = async (req: Request, res: Response) => {
    try {
        const empresas = await Empresa.find({}, "_id nombre idCategoria");
        res.status(200).json({
            ok: true,
            empresas
        });
    } catch (error) {
        triggerCarch(error, res, "Error en la peticion de obtener empresas")
    }
}

const getAllCompaniesFullData = async (req: Request, res: Response) => {
    try {
        const empresas = await Empresa.find({}, {}).populate("idCategoria");
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

export { 
    registrarEmpresa,
    getCompaniesByCategory,
    getAllCompanies,
    getAllCompaniesFullData
}

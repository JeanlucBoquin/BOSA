import { Request, Response } from 'express';
import { Cliente } from "../models/cliente";

const login = async (req: Request, res: Response) => {
    const { email, contraseña } = req.body
    try {
        const userLogin = await Cliente.findOne({ correo: email, contraseña }, {});
        if (!userLogin) {
            res.status(200).json({
                ok: false,
                msg: "Una de las credenciales se ingreso de forma incorrecta, o no se encuentra registrada"
            });
        }
        res.status(200).json({
            ok: true,
            userLogin
        });
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
            msg:"Usuario registrado con exito"
        });
    } catch (error) {
        triggerCarch(error, res, "Error al registrarse")
    }
}

function triggerCarch(error: any, res: Response, msg: string) {
    console.log(error);
    res.status(500).json({
        ok: false,
        msg: `Por favor contáctese con el administrador: ${msg}`
    })
}

export { login, register }
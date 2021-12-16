import { Request, Response } from 'express';
import { Admins } from '../models/admin';
import { Motorista } from '../models/motorista';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const signUp = async (req: Request, res: Response) => {
    const { apellido, correo, nombre, password, imagen } = req.body;
    try {
        const administracion = new Admins({
            apellido,
            correo,
            nombre,
            password: await Admins.encryptPassword(password),
            imagen
        });
        await administracion.save();
        res.status(200).json(administracion);
    } catch (error) {
        res.status(500).json({ error: `error al registrar admin ${error}` });

    }
}


export const signIn = async (req: Request, res: Response) => {
    const { correo, password } = req.body;
    try {
        const admin = await Admins.findOne({ correo });
        if (!admin) return res.status(400).json({ message: 'El admin no existe' });
        const match = await Admins.comparePassword(password, admin.password);
        if (!match) return res.status(401).json({ token: null, message: 'Password invalida' });
        const token = jwt.sign({ id: admin._id }, process.env.SECRET!, { expiresIn: 43200 });
        res.status(200).send({ token, admin });
    } catch (error) {
        res.status(500).send({ error: error });
    }
}

export const getBikers = async (req: Request, res: Response) => {
    try {
        const motoristas = await Motorista.find().populate('imagen');
        res.status(200).json(motoristas);
    } catch (error) {
        res.status(401).json({error: 'No se encontraron motoristas'});
    }
}
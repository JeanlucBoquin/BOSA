import { Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Motorista } from '../models/motorista';

dotenv.config();

export const signUp = async (req: Request, res: Response) => {

    const {
        nombre,
        apellido,
        correo,
        password,
        telefono,
        fechaNacimiento,
        identidad } = req.body;

    try {
        const motorista = new Motorista({
            nombre,
            apellido,
            correo,
            password: await Motorista.encryptPassword(password),
            telefono,
            fechaNacimiento: new Date(fechaNacimiento),
            identidad,
        });
        const motoristaGuardado = await motorista.save();

        const token = jwt.sign({ id: motoristaGuardado._id }, process.env.SECRET!, { expiresIn: 43200 })
        res.status(200).json({ token: token });
    } catch (error) {
        res.status(500).json({ error: `error al registrar usuario ${error}` });

    }
}


export const signIn = async (req: Request, res: Response) => {
    const { telefono, password } = req.body;

    try {
        const motorista = await Motorista.findOne({ telefono });
        if (!motorista) return res.status(400).json({ message: 'El motorista no existe' });
        const match = await Motorista.comparePassword(password, motorista.password);
        if (!match) return res.status(401).json({ token: null, message: 'Password invalida' });
        if (motorista.aceptacion !== 'aprobado') return res.status(201).json({ token: null, message: 'Motorista no Aprobado' });
        const token = jwt.sign({ id: motorista._id }, process.env.SECRET!, { expiresIn: 43200 });
        res.status(200).send({ token, motorista });
    } catch (error) {

    }

}

export const updateBiker = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { aceptacion } = req.body;

    try {
        const motorista = await Motorista.findByIdAndUpdate(id, { aceptacion });
        res.status(200).json({ motorista });
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar motorista' })
    }
}


export const getBikers = async (req: Request, res: Response) => {
    try {
        const motoristas = await Motorista.find({ estado: 'libre' });
        res.status(200).send(motoristas);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar motorista' })
    }
}

import {Request , Response} from 'express';
import { Motorista } from '../models/motorista';

export const getMotoristas = async (req: Request, res: Response) => {
    try {
        res.status(200).send({hola: 'Hola Mundo'});
    } catch (error) {
        res.status(500).send('Error al obtner usuario')
    }
}
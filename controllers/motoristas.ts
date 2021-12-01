import {Request , Response} from 'express';
import { Motorista } from '../models/motorista';


export const signIn = async (req: Request, res: Response) => {
    
    res.send('signIn');
}
export const signUp = async (req: Request, res: Response) => {
    res.send('signUp');
}

export const getMotoristas = async (req: Request, res: Response) => {
    try {
        const motorista = new Motorista({
            cell: '96109748',
            nombre: 'Nelson Sambula'
        });
        res.status(200).send({hola: 'Hola Mundo'});
    } catch (error) {
        res.status(500).send('Error al obtner usuario')
    }
}

export const newMotorista = async (req: Request, res: Response) => {
    try {
        const motorista = new Motorista({
            cell: '96109748',
            nombre: 'Nelson Sambula'
        });
        motorista.save();
        res.status(200).send(motorista);
    } catch (error) {
        res.status(500).send('Error al crear Motorista')
    }
}


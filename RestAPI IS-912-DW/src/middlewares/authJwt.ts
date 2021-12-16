import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Admins } from '../models/admin';

dotenv.config();

export const verifyToken = async (req: Request & any, res: Response, next: NextFunction) => {
    try {
        const token: string & any = req.headers['x-access-token'];
        console.log(token);

        if (!token) return res.status(403).json({ message: 'No existe un token' })

        const decoded: any = jwt.verify(token, process.env.SECRET!);
        console.log(decoded);
        const admin = await Admins.findById(decoded.id, { password: 0 });
        if (!admin) return res.status(404).json({ message: 'No existe un admin' })
        next();
    } catch (error) {
        return res.status(404).json({ message: 'No Autorizado'})
    }
}
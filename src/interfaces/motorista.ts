import { Date, Types } from 'mongoose'
export interface IMotorista {
    nombre: string;
    apellido: string;
    identidad: string;
    fechaNacimiento: Date;
    correo: string;
    password: string;
    telefono: string;
    estado: string;
    aceptacion: string;
    imagen: Types.ObjectId;
}
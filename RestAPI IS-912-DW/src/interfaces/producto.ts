import { IEmpresa } from './empresa';

export interface IProducto {
    empresa: IEmpresa;
    nombre: string;
    descripcion: string;
    precio: number;
    cantidad: number;
    pathImg: string;
    ISV: number;
}
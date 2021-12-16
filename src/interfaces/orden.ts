import { ICliente } from './cliente';
import { IFactura } from './factura';
import { IMotorista } from './motorista';

export interface IOrden {
    latitud: string;
    longitud: string;
    factura: IFactura;
    estado: boolean;
    cliente: ICliente;
    motorista: IMotorista;
    direccion: string;
    estadoRecorrido: string;
    comision: number;
}
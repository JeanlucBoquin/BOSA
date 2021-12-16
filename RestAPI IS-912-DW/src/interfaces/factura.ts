import { ICliente } from './cliente';
import { IProducto } from './producto';


export interface IProductoData {
    producto: IProducto;
    cantidad: number;
    precio: number;
    ISV: number;
}

export interface IFactura {
    cliente: ICliente;
    productoData: IProductoData[];
    subtotal: number;
    numeroFactura: number;
}

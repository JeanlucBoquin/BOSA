export interface Order {
    idCliente:    string;
    productos:    Producto[];
    datosTarjeta: DatosTarjeta;
    lnglat:       Lnglat;
}

export interface DatosTarjeta {
    tarjeta: string;
    cvv:     string;
}

export interface Lnglat {
    lng: number;
    lat: number;
}

export interface Producto {
    idProducto: string;
    idEmpresa:  string;
    cantidad:   number;
}

export interface OrderRecive {
    ok:  boolean;
    msg: string;
}
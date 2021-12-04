export interface ObtenerTopProductosYCcategorias {
    ok:                 boolean;
    nombreEmpresa:      string;
    imgEmpresa:         string;
    categotiasProducto: CategotiasProducto[];
    productos:          Producto[];
}

export interface CategotiasProducto {
    _id: string;
}

export interface Producto {
    _id:          string;
    idEmpresa:    string;
    nombre:       string;
    descripcion:  string;
    pathImg:      string;
    categoria:    string;
    precio:       number;
    calificacion: number;
    ventas:       number;
    disponibles:  number;
}

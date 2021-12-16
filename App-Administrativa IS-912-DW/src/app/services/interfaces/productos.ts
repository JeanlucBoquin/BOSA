export interface Productoregistrado{
    ok:     boolean;
    msg:    string;
}

export interface ProductosDeEmpresa {
    ok:        boolean;
    productos: Producto[];
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

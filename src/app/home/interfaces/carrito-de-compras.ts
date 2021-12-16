export interface ShoppingCart {
    _id:         string;
    idEmpresa:   string;
    nombre:      string;
    descripcion: string;
    precio:      number;
    cantidad:    number;
    index?:      number;
}

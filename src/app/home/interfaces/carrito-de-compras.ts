export interface ShoppingCart {
    _id:         string;
    idCompany:   string;
    nombre:      string;
    descripcion: string;
    precio:      number;
    cantidad:    number;
    index?:      number;
}

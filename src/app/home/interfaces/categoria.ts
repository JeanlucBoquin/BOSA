export interface ObtenerCategorias {
    ok:         boolean;
    categorias: Categoria[];
}

export interface Categoria {
    _id?:        string;
    nombre:      string;
    descripcion: string;
    pathImg:     string;
}

export interface ObtenerEmpresas {
    ok:       boolean;
    empresas: Empresa[];
}

export interface Empresa {
    _id:          string;
    idCategoria:  string;
    nombre:       string;
    descripcion:  string;
    pathImg:      string;
    calificacion: number;
}

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

export interface EmpresasFavoritas {
    ok:                boolean;
    empresasFavoritas: Empresa[];
}

export interface EstablecerEmpresaFavorita {
    ok:                boolean;
    empresasFavoritas: string[];
    msg:               string;
}

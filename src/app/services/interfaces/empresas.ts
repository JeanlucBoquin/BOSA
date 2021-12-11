export interface TodasLasEmpresas {
    ok:       boolean;
    empresas: Empresa[];
}

export interface Empresa {
    _id:         string;
    idCategoria: string;
    nombre:      string;
}

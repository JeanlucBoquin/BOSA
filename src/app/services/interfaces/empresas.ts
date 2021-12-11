export interface Empresaregistrada{
    ok:     boolean;
    msg:    string;
}
// -------------------------------------------
export interface TodasLasEmpresas {
    ok:       boolean;
    empresas: Empresa[];
}

export interface Empresa {
    _id:         string;
    idCategoria: string;
    nombre:      string;
}

// ---------------------------------------------
export interface EmpresasDatosCompletos {
    ok:       boolean;
    empresas: EmpresaCompleta[];
}

export interface EmpresaCompleta {
    _id:          string;
    idCategoria:  IDCategoria;
    nombre:       string;
    descripcion:  string;
    pathImg:      string;
    calificacion: number;
}

export interface IDCategoria {
    _id:         string;
    nombre:      string;
    descripcion: string;
    pathImg:     string;
}

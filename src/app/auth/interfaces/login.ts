export interface Login {
    ok:        boolean;
    userLogin: UserLogin;
    msg?:      string
}

export interface UserLogin {
    empresas_favoritas:  any[];
    productos_favoritos: any[];
    _id:                 string;
    nombre:              string;
    apellido:            string;
    correo:              string;
    contraseña:          string;
    fecha?:               Date;
}

export interface LoginFrontend {
    email:string,
    contraseña: string;
}

export interface Register {
    ok:        boolean;
    msg?:      string
}
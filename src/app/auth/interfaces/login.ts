export interface Login {
    ok:        boolean;
    userLogin: UserLogin;
    msg?:      string
}

export interface UserLogin {
    nombre:     string;
    contraseña: string;
    apellido?:   string;
    correo?:     string;
    fecha?:      Date;
    _id?:        string;
}

export interface LoginFrontend {
    email:string,
    contraseña: string;
}

export interface Register {
    ok:        boolean;
    msg?:      string
}
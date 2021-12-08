import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ProductosFavoritos } from '../home/interfaces/producto';
import { Login, UserLogin, Register } from './interfaces/login';
import { EmpresasFavoritas } from '../home/interfaces/empresa';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = "http://localhost:3000/api/cliente";
  usuarioActual: UserLogin = {
    empresas_favoritas: [],
    productos_favoritos: [],
    _id: "",
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
  };

  constructor(private http: HttpClient) { }

  authClient(data: UserLogin) {
    return this.http.post<Login>(`${this.baseUrl}/login`, data)
      .pipe(
        tap(res => {
          if (res.ok == true) {
            this.usuarioActual = res.userLogin!;
          }
        })
      );
  }
  registerClient(data: Register) {
    // console.log(data)
    return this.http.post<Register>(`${this.baseUrl}/register`, data)
  }

  getCompaniesFavorite() {
    console.log("Usuario", this.usuarioActual)
    return this.http.get<EmpresasFavoritas>(`${this.baseUrl}/${this.usuarioActual._id}/empresas-favoritas`);
  }

}

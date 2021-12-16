import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { EstablecerProductoFavorita, ProductosFavoritos } from '../home/interfaces/producto';
import { Login, UserLogin, Register } from './interfaces/login';
import { EmpresasFavoritas, EstablecerEmpresaFavorita } from '../home/interfaces/empresa';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // TODO, esta data tiene que ser controlada con un guard ya que al momento de recargar
  // tiene que mandarlo al login o revisar si exite un token 
  baseUrl: string = "http://localhost:3000/api/cliente";
  usuarioActual: UserLogin = {
    empresas_favoritas: [],
    productos_favoritos: [],
    _id: "61a7161117dae30241712115",
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
    // console.log("Usuario", this.usuarioActual)
    return this.http.get<EmpresasFavoritas>(`${this.baseUrl}/${this.usuarioActual._id}/empresas-favoritas`);
  }

  setCompaniesFavorite(idEmpresa: string, flag: boolean) {
    const body = {
      idCliente: this.usuarioActual._id,
      idEmpresa,
      favorito: flag
    }
    return this.http.put<EstablecerEmpresaFavorita>(`${this.baseUrl}/empresas-favoritas`, body)
  }
  
  getProductsFavorite() {
    return this.http.get<ProductosFavoritos>(`${this.baseUrl}/${this.usuarioActual._id}/productos-favoritos`);
  }

  setProductFavorite(idProducto: string, flag: boolean) {
    const body = {
      idCliente: this.usuarioActual._id,
      idProducto,
      favorito: flag
    }
    return this.http.put<EstablecerProductoFavorita>(`${this.baseUrl}/productos-favoritos`, body)
  }
}

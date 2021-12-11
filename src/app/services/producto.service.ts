import { Injectable } from '@angular/core';
import { NuevaProducto } from '../home/components/form-product/form-product.component';
import { HttpClient } from '@angular/common/http';
import { ProductosDeEmpresa, Productoregistrado } from './interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  baseUrl:string="http://localhost:3000/api/categorias"
  constructor(private http:HttpClient) { }

  registrarProducto(data:NuevaProducto){
    return this.http.post<Productoregistrado>(`${this.baseUrl}/productos/agregar-producto`,data)
  }

  // http://localhost:3000/api/categorias/61a81bab1c46b89ae7f34bed/productos
  obtenerProductos(idEmpresa:string){
    return this.http.get<ProductosDeEmpresa>(`${this.baseUrl}/${idEmpresa}/productos`)
  }
}

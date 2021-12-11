import { Injectable } from '@angular/core';
import { NuevaProducto } from '../home/components/form-product/form-product.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  baseUrl:string="http://localhost:3000/api/categorias"
  constructor(private http:HttpClient) { }

  registrarProducto(data:NuevaProducto){
    return this.http.post(`${this.baseUrl}/productos/agregar-producto`,data)
  }
}

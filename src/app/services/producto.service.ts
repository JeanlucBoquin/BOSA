import { Injectable } from '@angular/core';
import { NuevaProducto } from '../home/components/form-product/form-product.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  registrarProducto(data:NuevaProducto){
    return this.http.post("",data)
  }
}

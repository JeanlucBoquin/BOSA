import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevaEmpresa } from '../home/components/form-register/form-register.component';
import { TodasLasEmpresas } from './interfaces/empresas';
import { Categorias } from './interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  baseUrl:string = "http://localhost:3000/api/categorias"
  // http://localhost:3000/api/categorias/obtener-categorias
  // http://localhost:3000/api/categorias/empresas/agregar-empresa
  constructor(private http:HttpClient) { }

  registrarEmpresa(data:NuevaEmpresa){
    return this.http.post(`${this.baseUrl}/empresas/agregar-empresa`,data)
  }

  obtenerTodasLasEmpresas(){
    return this.http.get<TodasLasEmpresas>(`${this.baseUrl}/empresas/obtener-empresas`)
  }

  obtenerTodasLasCategoriasDeEmpresa(){
    return this.http.get<Categorias>(`${this.baseUrl}/obtener-categorias`)
  }
}

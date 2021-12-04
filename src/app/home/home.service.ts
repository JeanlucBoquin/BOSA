import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObtenerCategorias } from './interfaces/categoria';
import { ObtenerEmpresas } from './interfaces/empresa';
import { ObtenerTopProductosYCcategorias } from './interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl: string = "http://localhost:3000/api/categorias";
  // http://localhost:3000/api/categorias/61a7167c17dae30241712119/empresas/obtener-empresas
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<ObtenerCategorias>(`${this.baseUrl}/obtener-categorias`);
  }

  getCompanies(idCategory: string) {
    return this.http.get<ObtenerEmpresas>(`${this.baseUrl}/${idCategory}/empresas/obtener-empresas`);
  }

  getProductsTopAndCategories(idCategory: string, idCompany: string) {
    console.log("Servio home:",idCategory,idCompany);
    return this.http.get<ObtenerTopProductosYCcategorias>(`${this.baseUrl}/${idCategory}/empresas/${idCompany}/productos-top-categoria`);
  }
}

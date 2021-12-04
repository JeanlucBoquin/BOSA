import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObtenerCategorias } from './interfaces/categoria';
import { ObtenerEmpresas } from './interfaces/empresa';
import { ObtenerProductosSegunCategoria, ObtenerTopProductosYCategorias } from './interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl: string = "http://localhost:3000/api/categorias";
  // http://localhost:3000/api/categorias/61a7167c17dae30241712119/empresas/obtener-empresas
  // http://localhost:3000/api/categorias/61a7167c17dae30241712119/empresas/61a81bab1c46b89ae7f34bed/productos/licor, cerveza y vino
  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<ObtenerCategorias>(`${this.baseUrl}/obtener-categorias`);
  }

  getCompanies(idCategory: string) {
    return this.http.get<ObtenerEmpresas>(`${this.baseUrl}/${idCategory}/empresas/obtener-empresas`);
  }

  getProductsTopAndCategories(idCategory: string, idCompany: string) {
    return this.http.get<ObtenerTopProductosYCategorias>(`${this.baseUrl}/${idCategory}/empresas/${idCompany}/productos-top-categoria`);
  }
  
  getCategoryProducts(idCategory: string, idCompany: string, categoryProducts:string){
    console.log("Servio home getCategoryProducts:\n",idCategory,"\n",idCompany,"\n",categoryProducts);
    return this.http.get<ObtenerProductosSegunCategoria>(`${this.baseUrl}/${idCategory}/empresas/${idCompany}/productos/${categoryProducts}`);
  }
}

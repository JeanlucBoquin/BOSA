import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  public url = environment.apiUrl + '/ordenes';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any> {
    return this.http.get(`${this.url}/obtener-ordenes`);
  }

  getOrdersPending(idBiker: string): Observable<any> {
    return this.http.get(`${this.url}/pendientes/${idBiker}`);
  }

  getDetail(idOrden: string): Observable<any> {
    return this.http.get(`${this.url}/details/${idOrden}`);
  }

  getProduct(idProducto: string): Observable<any> {
    return this.http.get(`${this.url}/producto/${idProducto}`);
  }

  getOrdersDelivered(idBiker: string): Observable<any> {
    return this.http.get(`${this.url}/entregadas/${idBiker}`);
  }

  updateOrder(idOrden: string, idBike: string, data: any): Observable<any> {
    return this.http.put(`${this.url}/${idOrden}/${idBike}`, data);
  }

  updateTour(idOrden: string, data: any): Observable<any> {
    return this.http.put(`${this.url}/${idOrden}`, data);
  }

}

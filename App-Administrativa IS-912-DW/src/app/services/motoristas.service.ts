import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MotoristasService {

  public url = environment.apiUrl + '/admin/motoristas';
  public urlBiker = environment.apiUrl + '/motoristas';

  constructor(private http: HttpClient) { }

  getBakers(): Observable<any> {
    return this.http.get(`${this.url}/lista`);
  }

  updateBakers(id: string, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }

  signUpBiker(data: any): Observable<any> {
    return this.http.post(`${this.urlBiker}/signup`,data);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MotoristasService {
  
  public url = environment.apiUrl + '/admin/motoristas';
  
  constructor(private http: HttpClient) { }

  getBakers(): Observable<any>{
    return this.http.get(`${this.url}/lista`);
  }

}

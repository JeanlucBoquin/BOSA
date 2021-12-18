import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url = environment.apiUrl + '/admin';

  constructor(private http: HttpClient) { }

  signin(admin: any): Observable<any> {
    return this.http.post(`${this.url}/signin`, admin);
  }
}


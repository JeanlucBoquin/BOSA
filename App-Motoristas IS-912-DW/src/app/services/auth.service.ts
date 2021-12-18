import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url = environment.apiUrl + '/motoristas';

  constructor(private http: HttpClient) { }

  signUp(biker: any): Observable<any> {
    return this.http.post(`${this.url}/signup`, biker);
  }

  signIn(biker: any): Observable<any> {
    return this.http.post(`${this.url}/signin`, biker);
  }
}

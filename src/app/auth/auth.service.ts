import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, UserLogin, Register } from './interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string="http://localhost:3000/api/cliente";
  constructor(private http: HttpClient) { }

  authClient(data:UserLogin){
    return this.http.post<Login>(`${this.baseUrl}/login`,data);
  }
  registerClient(data:Register){
    console.log(data)
    return this.http.post<Register>(`${this.baseUrl}/register`,data)
  }
}

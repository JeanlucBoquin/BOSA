import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevaEmpresa } from '../home/components/form-register/form-register.component';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http:HttpClient) { }

  registrarEmpresa(data:NuevaEmpresa){
    return this.http.post("",data)
  }
}

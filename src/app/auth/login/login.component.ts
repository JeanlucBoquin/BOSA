import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email], []],
    password: ['', [Validators.required], []]
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login() {

  }

  getErrorMessage(campo: string) {
    if (campo == 'email') {
      if (this.miFormulario.get('email')?.hasError('required')) {
        return "El correo es requerido"
      } else {
        return (this.miFormulario.get('email')?.hasError('email')) ? "El correo no es valido" : ""
      }
    } else if (campo == 'password') {
      return "La contraseña es requerido";
    }
    return ''
  }
}

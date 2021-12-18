import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  miFormulario: FormGroup = this.fb.group({
    correo: ['', [Validators.required, Validators.email], []],
    password: ['', [Validators.required], []]
  })
  constructor(
    private fb: FormBuilder,
    private $auth: AuthService,
    private $cookie: CookieService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login() {
    const admin = this.miFormulario.getRawValue();
    this.$auth.signin(admin).subscribe( resp => {
      const {token } = resp;
      this.$cookie.set('token_access',token, 4, '/')
      this.router.navigateByUrl('/home');
    })
  }

  getErrorMessage(campo: string) {
    if (campo == 'correo') {
      if (this.miFormulario.get('correo')?.hasError('required')) {
        return "El correo es requerido"
      } else {
        return (this.miFormulario.get('correo')?.hasError('correo')) ? "El correo no es valido" : ""
      }
    } else if (campo == 'password') {
      return "La contraseña es requerido";
    }
    return ''
  }
}

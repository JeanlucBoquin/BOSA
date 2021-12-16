import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email], []],
    contraseña: ['', [Validators.required], []]
  })

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router:Router
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      email: "dabs3795@gmail.com",
      contraseña: "dabs3795"
    })
  }

  getErrorMessage(campo: string) {
    if (campo == 'email') {
      if (this.miFormulario.get('email')?.hasError('required')) {
        return "El correo es requerido"
      } else {
        return (this.miFormulario.get('email')?.hasError('email')) ? "El correo no es valido" : ""
      }
    } else if (campo == 'contraseña') {
      return "La contraseña es requerido";
    }
    return ''
  }

  login() {
    console.log(this.miFormulario.value)
    this.authService.authClient(this.miFormulario.value)
      .subscribe( res=>{
        if(res.ok===true){
          this.router.navigateByUrl("/home");
        }else{
          console.log(res.msg);
        }
      })
  }
}

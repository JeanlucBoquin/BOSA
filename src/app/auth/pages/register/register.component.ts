import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide: boolean = true;
  miFormulario: FormGroup = this.fb.group({
    name:       ['',[Validators.required],[]],
    lastName:   ['',[Validators.required],[]],
    email:      ['',[Validators.required,Validators.email],[]],
    password:   ['',[Validators.required],[]],
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  register() {

  }

  getErrorMessage(campo: string) {
    if (campo == 'name') {
      return "El nombre es requerido";
    }else if(campo == 'lastName'){
      return "El apelldio es requerido";
    }else if(campo == 'email'){
      if(this.miFormulario.get('email')?.hasError('required')){
        return "El correo es requerido"
      }else{
        return (this.miFormulario.get('email')?.hasError('email'))?"El correo no es valido":""
      }
    }else if(campo == 'password'){
      return "La contraseña es requerido";
    }
    return ''
  }
}

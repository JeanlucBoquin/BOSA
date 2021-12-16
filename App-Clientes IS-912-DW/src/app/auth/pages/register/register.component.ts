import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide: boolean = true;
  miFormulario: FormGroup = this.fb.group({
    nombre:     ['',[Validators.required],[]],
    apellido:   ['',[Validators.required],[]],
    correo:     ['',[Validators.required,Validators.email],[]],
    contraseña: ['',[Validators.required],[]],
    tercon:     [false,[Validators.required, Validators.requiredTrue],[]]
  })
  constructor(private fb: FormBuilder,
              private auntService:AuthService,
              private router:Router
    ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:"Cristian",
      apellido:"Suazo",
      correo:"crisu@gmail.com",
      contraseña:"1234"
    })
  }

  register() {
    const {tercon, ...data}= this.miFormulario.value
    // console.log(this.miFormulario.value)
    // console.log(data)
    this.auntService.registerClient(data).subscribe(
      res=>{
        if(res.ok){
          this.router.navigateByUrl("/home")
        }else{
          console.log(res.msg)
        }
      }
    )
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

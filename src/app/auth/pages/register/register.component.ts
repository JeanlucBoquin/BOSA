import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registry',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    apellido: ['', Validators.required],
    identidad: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    telefono: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private $auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  registro(): void {
    const biker = this.form.getRawValue();
    this.$auth.signUp(biker).subscribe(resp => {
      Swal.fire(
        'Registro Exitoso!',
        'Se revisara tu solicitud, pronto te contactaremos!',
        'success'
      ).then( (result) => {
        this.router.navigateByUrl('/identificacion');
      })
    });

  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MotoristasService } from 'src/app/services/motoristas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-bikers',
  templateUrl: './form-bikers.component.html',
  styleUrls: ['./form-bikers.component.css']
})
export class FormBikersComponent implements OnInit {


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
    private $motoristas: MotoristasService,
    private router: Router
  ) { }

  ngOnInit(): void {
  
  }

  newBiker(): void {
    const biker = this.form.getRawValue();
    this.$motoristas.signUpBiker(biker).subscribe(resp => {
      
      Swal.fire(
        'Motorista agregado exitosamente!',
        'Presione OK para continuar',
        'success'
      ).then(resp => {
        this.router.navigateByUrl('home/bikers');
      })

    });
    
  }

}

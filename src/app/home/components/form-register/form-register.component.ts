import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresa.service';

export interface NuevaEmpresa {
  nombre: string;
  descripcion: string;
  calificacion: number;
  categoria: string;
  pathImg: string;
}


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    calificacion: [, [Validators.required, Validators.min(0), Validators.max(5)], []],
    categoria: ['', Validators.required],
    pathImg: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private empresaService:EmpresaService
  ) { }

  ngOnInit(): void {
  }

  registrar() {
    const data: NuevaEmpresa = this.miFormulario.value;
    this.empresaService.registrarEmpresa(data)
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Categoria } from 'src/app/services/interfaces/categoria';

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
  categorias: Categoria[] = [];
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    calificacion: [, [Validators.required, Validators.min(0), Validators.max(5)], []],
    idCategoria: ['', Validators.required],
    pathImg: ["default/microsoft.jpg", [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private empresaService: EmpresaService
  ) { }

  ngOnInit(): void {
    this.empresaService.obtenerTodasLasCategoriasDeEmpresa()
      .subscribe(res => {
        if (res.ok === true) {
          res.categorias.forEach(categoria => {
            this.categorias.push(categoria)
          })
        }
      })
  }

  registrar() {
    const data: NuevaEmpresa = this.miFormulario.value;
    console.log(data)
    this.empresaService.registrarEmpresa(data)
      .subscribe(console.log)
  }
}

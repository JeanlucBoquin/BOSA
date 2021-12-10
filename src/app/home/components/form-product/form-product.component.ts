import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../../services/producto.service';

export interface NuevaProducto {
  nombre:       string;
  descripcion:  string;
  precio:       number;
  disponibles:  number;
  calificacion: number;
  categoria:    string;
  pathImg:      string;
  ventas:       number;
}


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre:       ['', Validators.required],
    descripcion:  ['', Validators.required],
    precio:       [0, [Validators.required, Validators.min(0)]],
    disponibles:  [0, [Validators.required, Validators.min(0)]],
    calificacion: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
    categoria:    ['', Validators.required],
    pathImg:      ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private productoService:ProductoService
  ) { }

  ngOnInit(): void {
  }

  registrar() {
    const data: NuevaProducto = this.miFormulario.value;
    data.ventas=0;
    console.log(data)
    this.productoService.registrarProducto(data)
  }
}

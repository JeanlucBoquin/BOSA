import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../../services/producto.service';
import { EmpresaService } from '../../../services/empresa.service';
import { Empresa } from 'src/app/services/interfaces/empresas';

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
  empresas:Empresa[]=[];

  miFormulario: FormGroup = this.fb.group({
    nombre:       ['', Validators.required],
    descripcion:  ['', Validators.required],
    precio:       [  , [Validators.required, Validators.min(0)]],
    disponibles:  [  , [Validators.required, Validators.min(0)]],
    calificacion: [  , [Validators.required, Validators.min(0), Validators.max(5)]],
    categoria:    ['', Validators.required],
    pathImg:      ["default/microsoft.jpg", Validators.required],
    idEmpresa:    ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private productoService:ProductoService,
    private empresaService:EmpresaService
  ) { }

  ngOnInit(): void {
    this.empresaService.obtenerTodasLasEmpresas()
      .subscribe(res=>{
        if(res.ok===true){
          res.empresas.forEach(empresa=>{
            this.empresas.push(empresa);
          })
        }
      })
  }

  registrar() {
    const data: NuevaProducto = this.miFormulario.value;
    data.ventas=0;
    console.log(data)
    this.productoService.registrarProducto(data)
      .subscribe(console.log)
  }
}

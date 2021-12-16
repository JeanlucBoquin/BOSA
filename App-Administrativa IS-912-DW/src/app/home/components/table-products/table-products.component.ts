import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { EmpresaService } from '../../../services/empresa.service';
import { Empresa } from '../../../services/interfaces/empresas';
import { Producto } from 'src/app/services/interfaces/productos';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit {
  @ViewChild("noDisponibles") noDisponibles!: ElementRef;

  empresas:Empresa[]=[];
  productos:Producto[]=[];
  empresaSeleccionada:string=""

  constructor(
    private empresaService:EmpresaService, 
    private productoService:ProductoService
  ) { }

  ngOnInit(): void {
    this.empresaService.obtenerTodasLasEmpresas()
      .subscribe(res=>{
        res.empresas.forEach(empresa=>{
          this.empresas.push(empresa);
        });
      })
  }

  obtenerProductos(idEmpresa:string){
    console.log(idEmpresa)
    this.productoService.obtenerProductos(idEmpresa)
      .subscribe(res=>{
        this.productos=[];
        res.productos.forEach(producto=>{
          this.productos.push(producto);
        });
        if (res.productos.length == 0) {  
          this.noDisponibles.nativeElement.innerHTML =
            `
            <div class="p-3" style="background-color:  #16a085; border-radius: 5px;">                
              <h1>Manten la calma</h1>
              <p>Aun no se agregas empresas a tu lista de favoritos</p>
            </div>
            `
        }else{
          this.noDisponibles.nativeElement.innerHTML="";
        }
      })
  }
}

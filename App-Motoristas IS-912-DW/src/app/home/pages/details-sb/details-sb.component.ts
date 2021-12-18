import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { MapaComponent } from '../../components/mapa/mapa.component';

@Component({
  selector: 'app-details-sb',
  templateUrl: './details-sb.component.html',
  styleUrls: ['./details-sb.component.css']
})
export class DetailsSbComponent implements OnInit {
  idOrden = '';
  buttons = true;
  orden: any = {};
  cliente: any = {
    nombre: '',
    apellido: ''
  }
  productos: any = [];
  productosFinal: any = [];
  comision = 45;
  currentBiker:any = {};
  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private $orden: OrdenesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentBiker = JSON.parse(localStorage.getItem('currentBiker')!);

    this.productos = [];
    this.productosFinal = [];

    this.route.params.subscribe(params => {
      const { id } = params;
      this.idOrden = id;
      this.$orden.getDetail(this.idOrden).subscribe(resp => {
        this.orden = resp.orden;
        console.log(this.orden);
        this.cliente = this.orden.idCliente;
        this.orden.productos.forEach((producto: any) => {
          const { cantidad, idProducto } = producto;
          this.productos.push({ cantidad, idProducto });
        });
        // console.log(this.orden);
        this.productos.forEach((producto: any) => {
          const { cantidad, idProducto } = producto;

          this.$orden.getProduct(idProducto).subscribe(resp => {
            console.log(resp);
            this.productosFinal.push({resp, cantidad});
          })

        })

      })
    });


  }

  openMap(map: any): void {
    console.log('Abrir mapa');
    this.dialog.open(MapaComponent, {
      data: map,
      width: '80%',
      height: '80%',
    })
  }

}

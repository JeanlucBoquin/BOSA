import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenesService } from 'src/app/services/ordenes.service';
import Swal from 'sweetalert2';
import { MapaComponent } from '../../components/mapa/mapa.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

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
  currentBiker: any= {};
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

  takeOrder(): void {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success m-3',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Tomar la orden?',
      text: "Seguro que quiere tomar esta orden!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, tomar la orden!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        const { _id } = JSON.parse(localStorage.getItem('currentBiker')!);
        this.$orden.updateOrder(this.idOrden, _id, { estadoOrden: 'pendiente' }).subscribe(resp => {
          swalWithBootstrapButtons.fire(
            'Tomada!',
            'La orden a sido tomada con exito.',
            'success'
          );
          this.router.navigateByUrl('inicio/ordenes-pendientes');
        });


      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'No se a tomado la orden',
          'error'
        )
      }
    })
  }

}

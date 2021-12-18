import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenesService } from 'src/app/services/ordenes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  orden: any = {};
  productos: any = [];
  productosFinal: any = [];
  comision = 45;
  idOrden = '';
  cliente: any = {
    nombre: '',
    apellido: ''
  }
  subtotal = 0;
  comisionVenta = 60;

  currentBiker: any = {};


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private $orden: OrdenesService
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
            const { producto } = resp;
            this.subtotal += producto.precio * cantidad;
            console.log(producto.precio)
            this.productosFinal.push({ resp, cantidad });
          })

        })

      })
    });


  }

  deliver(): void {
    Swal.fire({
      title: 'Desea finalizar la entrega?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, entregar!',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Entregado!',
          'Su orden se entrego con exito.',
          'success'
        ).then(() => {
          this.$orden.updateTour(this.idOrden, { estadoRecorrido: 'entregado', estadoOrden: 'entregada' }).subscribe(resp => {
            console.log('ok')
          });
          this.router.navigateByUrl('inicio/ordenes-entregadas');
        })
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { MotoristasService } from 'src/app/services/motoristas.service';
import { OrdenesService } from 'src/app/services/ordenes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  ordenes: any[] = [];
  title: string = 'Ordenes'
  claves: any = {};
  constructor(
    private $orden: OrdenesService,
    private $motorista: MotoristasService
  ) { }

  ngOnInit(): void {
    this.$orden.getOrders().subscribe((resp => {
      const { ordenes } = resp;
      this.ordenes = ordenes;
      console.log(ordenes);
    }));

    this.$motorista.getBakers().subscribe(resp => {
      const motoristas: any[] = resp;
      motoristas.forEach(moto => {
        if (moto.aceptacion === 'aprobado' && moto.estado === 'libre') {
          this.claves[moto._id] = moto.nombre;
        }
      })
      console.log(this.claves);
    });
  }

  asignar(orden: any): void {
    Swal.fire({
      title: 'Seleccione el motorista a asignar',
      input: 'select',
      inputOptions: {
        'Motoristas': this.claves
      },
      inputPlaceholder: '--',
      showCancelButton: true,
    }).then(value => {
      this.$orden.updateOrder(orden._id, value.value, { estadoOrden: 'pendiente' }).subscribe(resp => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Motorista asiganado correctamente',
          showConfirmButton: false,
          timer: 2000
        });
        this.ngOnInit();
      });


    })

  }

}

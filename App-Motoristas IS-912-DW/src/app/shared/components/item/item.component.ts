import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenesService } from 'src/app/services/ordenes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() id: string & any = '';
  @Input() name = false;
  @Input() btn = false;
  @Input() nombre = '';
  @Input() apellido = '';
  @Input() direccion = '';
  @Input() comision = 45;
  @Input() clinte = '';
  @Input() buttons = true;
  @Input() recorrido = '';

  constructor(
    private router: Router,
    private $orden: OrdenesService
  ) { }

  ngOnInit(): void {
    if (this.recorrido === '') {
      this.recorrido = 'tomada';
    }
  }

  changeStade(): void {

    Swal.fire({
      title: `Desea cambiar el estado?`,
      text: `Su estado actual es "${this.recorrido.toUpperCase()}"`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cambiar estado!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        switch (this.recorrido) {
          case 'tomada':
            this.recorrido = 'en camino'
            this.$orden.updateTour(this.id, { estadoRecorrido: this.recorrido }).subscribe(resp => {
              console.log('ok');
            });
            break;

          case 'en camino':
            this.recorrido = 'en el origen'
            this.$orden.updateTour(this.id, { estadoRecorrido: this.recorrido }).subscribe(resp => {
              console.log('ok');
            })

            break;
          case 'en el origen':
            this.recorrido = 'en el destino'
            this.$orden.updateTour(this.id, { estadoRecorrido: this.recorrido }).subscribe(resp => {
              console.log('ok');
            });

            break;
          case 'en el destino':
            this.recorrido = 'entregando'
            this.$orden.updateTour(this.id, { estadoRecorrido: this.recorrido }).subscribe(resp => {
              console.log('ok');
              this.router.navigate(['/inicio/factura', this.id]);
            });

            break;
          case 'entregando':
            // this.recorrido = 'entregando'
            this.$orden.updateTour(this.id, { estadoRecorrido: this.recorrido }).subscribe(resp => {
              console.log('ok');
              this.router.navigate(['/inicio/factura', this.id]);
            });

            break;
        }

        Swal.fire(
          'Cambio Exitoso!',
          `Tu nuevo estado es "${this.recorrido.toUpperCase()}"`,
          'success'
        );
      }
    })
  }

  getRoute(stade: boolean): void {
    console.log('hola', stade);
    if (stade) {
      this.router.navigate(['/inicio/detalle', this.id]);
    } else {
      this.router.navigate(['/inicio/detalle-sb', this.id]);
    }
  }

}

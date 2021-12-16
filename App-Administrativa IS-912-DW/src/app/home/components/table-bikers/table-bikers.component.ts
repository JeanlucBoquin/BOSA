import { Component, OnInit } from '@angular/core';
import { MotoristasService } from 'src/app/services/motoristas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-table-bikers',
  templateUrl: './table-bikers.component.html',
  styleUrls: ['./table-bikers.component.css']
})
export class TableBikersComponent implements OnInit {

  bikers: any = [];

  constructor(
    private $bikers: MotoristasService,
  ) { }

  ngOnInit(): void {
    this.$bikers.getBakers().subscribe(resp => {
      this.bikers = resp;
      console.log(resp);
    })
  }

  estadoImg(bike: any): boolean {
    return false;
  }

  editar(bike: any): void {
    Swal.fire({
      title: `Desea aprobar a ${bike.nombre}?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Aprobar',
      denyButtonText: 'Rechazar',
      cancelButtonText: 'Pendiente'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.$bikers.updateBakers(bike._id, { aceptacion: 'aprobado' }).subscribe(resp => {
          Swal.fire('Motorista aprobado!', '', 'success');
          this.ngOnInit();
        })
      } else if (result.isDenied) {
        this.$bikers.updateBakers(bike._id, { aceptacion: 'rechazado' }).subscribe(resp => {
          Swal.fire('Motorista rechazado', '', 'error')
          this.ngOnInit();
        });
      }
    })
  }

  eliminar(bike: any): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger m-2'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: `Se eliminara a ${bike.nombre}?`,
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí, eliminar!',
      cancelButtonText: 'No, canceler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Eliminado!',
          `${bike.nombre} a sido eliminado.`,
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Operacion cancelada',
          'error'
        )
      }
    })
  }
}

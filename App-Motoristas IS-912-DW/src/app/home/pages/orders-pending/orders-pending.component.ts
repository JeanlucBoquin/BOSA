import { Component, OnInit } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-orders-pending',
  templateUrl: './orders-pending.component.html',
  styleUrls: ['./orders-pending.component.css']
})
export class OrdersPendingComponent implements OnInit {

  ordenes: any = [];
  currentBiker: any = {};
  constructor(
    private $orden: OrdenesService
  ) { }

  ngOnInit(): void {
    this.currentBiker = JSON.parse(localStorage.getItem('currentBiker')!);
    const { _id } = JSON.parse(localStorage.getItem('currentBiker')!);
    this.$orden.getOrdersPending(_id).subscribe(resp => {
      this.ordenes = resp.ordenes;
      console.log(resp);

    })
  }

  getIdOrden(orden: any): string {
    return orden._id;
  }

}

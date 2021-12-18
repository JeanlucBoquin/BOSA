import { Component, Input, OnInit } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-orders-available',
  templateUrl: './orders-available.component.html',
  styleUrls: ['./orders-available.component.css']
})
export class OrdersAvailableComponent implements OnInit {
  ordenes: any= [];
  currentBiker: any = {};
  constructor(
    private $ordenes: OrdenesService
  ) { }

  ngOnInit(): void {
    this.currentBiker = JSON.parse(localStorage.getItem('currentBiker')!);
    this.$ordenes.getOrders().subscribe(resp => {
      this.ordenes = resp.ordenes;
      console.log(resp);
    })
  }

  getIdOrden(orden: any): string {
    return orden._id;
  }

}

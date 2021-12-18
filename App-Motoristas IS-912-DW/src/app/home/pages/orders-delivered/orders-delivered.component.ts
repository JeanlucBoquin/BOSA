import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { OrdenesService } from 'src/app/services/ordenes.service';
@Component({
  selector: 'app-orders-delivered',
  templateUrl: './orders-delivered.component.html',
  styleUrls: ['./orders-delivered.component.css']
})
export class OrdersDeliveredComponent implements OnInit {

  ordenes: any = [];
  currentBiker: any = {};
  constructor(
    private $orden: OrdenesService
  ) { }

  ngOnInit(): void {
    this.currentBiker = JSON.parse(localStorage.getItem('currentBiker')!);
    const { _id } = JSON.parse(localStorage.getItem('currentBiker')!);
    this.$orden.getOrdersDelivered(_id).subscribe(resp => {
      this.ordenes = resp.ordenes;
    });
  }

  getIdOrden(orden: any): string {
    return orden._id;
  }

}

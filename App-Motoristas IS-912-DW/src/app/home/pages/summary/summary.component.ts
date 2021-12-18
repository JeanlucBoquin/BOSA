import { Component, OnInit } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  currentBiker: any;
  pending: number = 0;
  available: number = 0;
  delivered: number = 0;

  constructor(private $orden: OrdenesService) { }

  ngOnInit(): void {
    this.currentBiker = JSON.parse(localStorage.getItem('currentBiker')!);
    this.$orden.getOrders().subscribe(resp => {
      this.available = resp.ordenes.length; 
    });

    this.$orden.getOrdersDelivered(this.currentBiker._id).subscribe(resp => {
      this.delivered = resp.ordenes.length;
    });

    this.$orden.getOrdersPending(this.currentBiker._id).subscribe(resp => {
      this.pending = resp.ordenes.length;
    })

  }

}

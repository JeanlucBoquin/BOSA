import { Component, Input, OnInit } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-tables-invoice',
  templateUrl: './tables-invoice.component.html',
  styleUrls: ['./tables-invoice.component.css']
})
export class TablesInvoiceComponent implements OnInit {

  @Input() data: any = [];

  constructor(private $orden: OrdenesService) { }

  ngOnInit(): void {
    this.chargeProduct(this.data);
    // console.log(this.data)
  }

  chargeProduct(product: any[]): void {
    console.log(product);
  }

}

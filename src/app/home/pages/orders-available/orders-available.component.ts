import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-available',
  templateUrl: './orders-available.component.html',
  styleUrls: ['./orders-available.component.css']
})
export class OrdersAvailableComponent implements OnInit {
  items = Array.from({length: 10}).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit(): void {
  }

}

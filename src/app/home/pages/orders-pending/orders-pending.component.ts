import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-pending',
  templateUrl: './orders-pending.component.html',
  styleUrls: ['./orders-pending.component.css']
})
export class OrdersPendingComponent implements OnInit {

  items = Array.from({length: 10}).map((_, i) => `Item #${i}`);

  constructor() { }

  ngOnInit(): void {
  }

}

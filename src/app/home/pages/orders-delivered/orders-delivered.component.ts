import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'app-orders-delivered',
  templateUrl: './orders-delivered.component.html',
  styleUrls: ['./orders-delivered.component.css']
})
export class OrdersDeliveredComponent implements OnInit {
  items = Array.from({length: 10}).map((_, i) => `Item #${i}`);

  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }
}

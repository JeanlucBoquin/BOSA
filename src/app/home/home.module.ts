import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SummaryComponent } from './pages/summary/summary.component';
import { OrdersAvailableComponent } from './pages/orders-available/orders-available.component';
import { OrdersDeliveredComponent } from './pages/orders-delivered/orders-delivered.component';
import { OrdersPendingComponent } from './pages/orders-pending/orders-pending.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SummaryComponent,
    OrdersAvailableComponent,
    OrdersDeliveredComponent,
    OrdersPendingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }

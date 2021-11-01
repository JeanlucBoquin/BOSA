import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SummaryComponent } from './pages/summary/summary.component';
import { OrdersAvailableComponent } from './pages/orders-available/orders-available.component';
import { OrdersDeliveredComponent } from './pages/orders-delivered/orders-delivered.component';
import { OrdersPendingComponent } from './pages/orders-pending/orders-pending.component';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


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
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class HomeModule { }

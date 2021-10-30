import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersAvailableComponent } from './pages/orders-available/orders-available.component';
import { OrdersDeliveredComponent } from './pages/orders-delivered/orders-delivered.component';
import { OrdersPendingComponent } from './pages/orders-pending/orders-pending.component';
import { SummaryComponent } from './pages/summary/summary.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SummaryComponent
      },
      {
        path: 'resumen',
        component: SummaryComponent
      },
      {
        path: 'ordenes-pendientes',
        component: OrdersPendingComponent
      },
      {
        path: 'ordenes-entregadas',
        component: OrdersDeliveredComponent
      },
      {
        path: 'ordenes-disponibles',
        component: OrdersAvailableComponent
      },
      {
        redirectTo: 'resumen',
        pathMatch: 'full'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
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
        path: 'detalle',
        component: DetailsComponent
      },
      {
        path: 'factura',
        component: InvoiceComponent
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

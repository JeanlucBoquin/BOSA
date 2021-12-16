import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { FavoriteCompaniesComponent } from './pages/favorite-companies/favorite-companies.component';
import { FavoriteProductsComponent } from './pages/favorite-products/favorite-products.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { AccountComponent } from './pages/account/account.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RecordComponent } from './pages/record/record.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { ProductsComponent } from './pages/products/products.component';
import { MapComponent } from './pages/map/map.component';
import { PaymentComponent } from './pages/payment/payment.component';

// Queda pendiente el lazy-load de los componentes hijos

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'categories/:idCategory/companies',
        component: CompaniesComponent,
        // Prueba fallida con esta ruta hija, creo que el parametro afecta
        // children:[
        //   {
        //     path:"/product",
        //     component:ProductsComponent
        //   }
        // ]
      },
      {
        path: 'categories/:idCategory/companies/:idCompany/products',
        component: ProductsComponent
      },
      {
        path: 'favorite-companies',
        component: FavoriteCompaniesComponent
      },
      {
        path: 'favorite-products',
        component: FavoriteProductsComponent
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      },
      {
        path: 'record',
        component: RecordComponent
      },
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: '',
        redirectTo: 'categories',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

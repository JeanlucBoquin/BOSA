import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RegisterBikerComponent } from './pages/register-biker/register-biker.component';
import { RegisterCompanyComponent } from './pages/register-company/register-company.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { ProductsComponent } from './pages/products/products.component';
import { BikersComponent } from './pages/bikers/bikers.component';
import { AccountComponent } from './pages/account/account.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RegisterProductsComponent } from './pages/register-products/register-products.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'categories',
        component: CategoriesComponent
      },
      {
        path:'companies',
        component: CompaniesComponent
      },
      {
        path:'products',
        component: ProductsComponent
      },
      {
        path:'bikers',
        component: BikersComponent
      },
      {
        path:'register-company',
        component: RegisterCompanyComponent
      },
      {
        path:'register-product',
        component: RegisterProductsComponent
      },
      {
        path:'register-biker',
        component: RegisterBikerComponent
      },
      {
        path:'account',
        component: AccountComponent
      },
      {
        path:'settings',
        component: SettingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

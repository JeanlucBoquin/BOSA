import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RegisterBikerComponent } from './pages/register-biker/register-biker.component';
import { RegisterCompanyComponent } from './pages/register-company/register-company.component';
import { RegisterProductComponent } from './pages/register-product/register-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'registro-motorista',
        component: RegisterBikerComponent
      },
      {
        path: 'registro-productos',
        component: RegisterProductComponent
      },
      {
        path: 'registro-empresas',
        component: RegisterCompanyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

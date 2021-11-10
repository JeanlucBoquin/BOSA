import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RegisterBikerComponent } from './pages/register-biker/register-biker.component';
import { RegisterProductComponent } from './pages/register-product/register-product.component';
import { RegisterCompanyComponent } from './pages/register-company/register-company.component';
<<<<<<< HEAD
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { TableBikersComponent } from './components/table-bikers/table-bikers.component';
=======
import { MaterialModule } from '../material/material.module';
>>>>>>> main


@NgModule({
  declarations: [
    HomeComponent,
    RegisterBikerComponent,
    RegisterProductComponent,
    RegisterCompanyComponent,
    FormRegisterComponent,
    FormProductComponent,
    TableBikersComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    HomeRoutingModule
  ],
=======
    HomeRoutingModule,
    MaterialModule 
  ]
>>>>>>> main
})
export class HomeModule { }

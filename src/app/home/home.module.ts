import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RegisterBikerComponent } from './pages/register-biker/register-biker.component';
import { RegisterProductComponent } from './pages/register-product/register-product.component';
import { RegisterCompanyComponent } from './pages/register-company/register-company.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    RegisterBikerComponent,
    RegisterProductComponent,
    RegisterCompanyComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule 
  ]
})
export class HomeModule { }

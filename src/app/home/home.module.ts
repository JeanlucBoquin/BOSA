import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RegisterBikerComponent } from './pages/register-biker/register-biker.component';
import { RegisterProductComponent } from './pages/register-product/register-product.component';
import { RegisterCompanyComponent } from './pages/register-company/register-company.component';
import { MaterialModule } from '../material/material.module';
import { CompaniesComponent } from './pages/companies/companies.component';
import { BikersComponent } from './pages/bikers/bikers.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterProductsComponent } from './pages/register-products/register-products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AccountComponent } from './pages/account/account.component';
import { SettingsComponent } from './pages/settings/settings.component';


@NgModule({
  declarations: [
    HomeComponent,
    RegisterBikerComponent,
    RegisterProductComponent,
    RegisterCompanyComponent,
    CompaniesComponent,
    BikersComponent,
    ProductsComponent,
    RegisterProductsComponent,
    CategoriesComponent,
    AccountComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule 
  ]
})
export class HomeModule { }

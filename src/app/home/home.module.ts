import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// import { CategoriesComponent } from './pages/categories/categories.component';
// import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
// // import { ProductsComponent } from './pages/products/products.component';
import { MaterialModule } from '../material/material.module';
import { AccountComponent } from './pages/account/account.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { FavoriteCompaniesComponent } from './pages/favorite-companies/favorite-companies.component';
import { FavoriteProductsComponent } from './pages/favorite-products/favorite-products.component';
import { OffersComponent } from './pages/offers/offers.component';
import { RecordComponent } from './pages/record/record.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    HomeComponent,
    AccountComponent,
    CategoriesComponent,
    FavoriteCompaniesComponent,
    FavoriteProductsComponent,
    OffersComponent,
    RecordComponent,
    SettingsComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Page404Component } from './shared/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

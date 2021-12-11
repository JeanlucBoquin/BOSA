import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    NoopAnimationsModule,
    AnimateOnScrollModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    MatDialogModule

  ],
  exports: [
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

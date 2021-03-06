import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from '../material/material.module';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgsRevealModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }

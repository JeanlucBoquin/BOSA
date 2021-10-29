import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
  ],

  imports: [
    CommonModule,
    AuthRoutingModule
  ],
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistryComponent } from './pages/registry/registry.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    LoginComponent,
    RegistryComponent
  ],
  exports: [
    LandingPageComponent,
    LoginComponent,
    RegistryComponent
  ],
  imports: [CommonModule],
})
export class AuthModule {}

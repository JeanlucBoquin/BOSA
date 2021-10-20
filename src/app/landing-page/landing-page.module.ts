import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { CreadoresComponent } from './pages/creadores/creadores.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LandingComponent,
    CreadoresComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class LandingPageModule { }

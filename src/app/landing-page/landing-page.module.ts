import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { CreadoresComponent } from './pages/creadores/creadores.component';
import { MaterialModule } from '../material/material.module';
import { Section1Component } from './pages/landing/sections/section1/section1.component';
import { Section2Component } from './pages/landing/sections/section2/section2.component';
import { Section3Component } from './pages/landing/sections/section3/section3.component';
import { Section4Component } from './pages/landing/sections/section4/section4.component';
import { Section5Component } from './pages/landing/sections/section5/section5.component';
import { Section6Component } from './pages/landing/sections/section6/section6.component';
import { Section7Component } from './pages/landing/sections/section7/section7.component';




@NgModule({
  declarations: [
    LandingComponent,
    CreadoresComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section7Component,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class LandingPageModule { }

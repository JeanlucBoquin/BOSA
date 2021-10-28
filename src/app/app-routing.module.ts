import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing-page/pages/landing/landing.component';
import { Page404Component } from './shared/page404/page404.component';

// Visualizacion (Borrar)
import { LoginComponent } from './auth/pages/login/login.component';

const routes: Routes = [
  {
    path: "landing-page",
    component: LoginComponent
  },
  { path: "",
    redirectTo: "landing-page",
    pathMatch: "full"
  },
  { path: "**",
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

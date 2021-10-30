import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing-page/pages/landing/landing.component';
import { Page404Component } from './shared/page404/page404.component';

// Visualizacion (Borrar)
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';

const routes: Routes = [
  {
    path: "landing-page",
    component: LandingComponent
  },
  {
    path:"auth",
    loadChildren: () => import("./auth/auth.module").then((module)=>module.AuthModule)
  },
  {
    path:'home',
    loadChildren: ()=>import("./home/home.module").then(module=>module.HomeModule)
  },
  { path: "",
    redirectTo: "home",
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
